import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Crypto from "expo-crypto";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { z } from "zod";
import {
  BorderRadius,
  Colors,
  Spacing,
  Typography,
} from "../../constants/Theme";

/**
 * LoginScreen.tsx
 * - React Native + Expo + TypeScript
 * - Validação com React Hook Form + Zod
 * - Login com email e senha
 * - Verifica credenciais contra os dados salvos no AsyncStorage
 * - Salva informações do usuário logado localmente
 */

const schema = z.object({
  email: z.string().email("Informe um e-mail válido."),
  password: z.string().min(6, "A senha deve ter ao menos 6 caracteres."),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmitSuccess?: (values: FormValues) => void | Promise<void>;
  loading?: boolean;
};

export default function LoginScreen({
  onSubmitSuccess,
  loading: loadingProp,
}: Props) {
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = async (values: FormValues) => {
    // LOG 1: Verificando se a função foi chamada
    console.log("Função onSubmit (login) foi chamada!");
    console.log("Dados recebidos do formulário:", values);

    setLoading(true);
    try {
      // 1. Gerar hash da senha informada
      const passwordHash = await Crypto.digestStringAsync(
        Crypto.CryptoDigestAlgorithm.SHA256,
        values.password
      );

      // 2. Ler os usuários salvos no AsyncStorage
      const existingUsersJson = await AsyncStorage.getItem("users");
      const users = existingUsersJson ? JSON.parse(existingUsersJson) : [];

      // 3. Verificar se existe um usuário com o e-mail e senha corretos
      const user = users.find(
        (u: any) => u.email === values.email && u.passwordHash === passwordHash
      );

      if (!user) {
        throw new Error("E-mail ou senha incorretos.");
      }

      // 4. Salvar informações do usuário logado
      await AsyncStorage.setItem(
        "currentUser",
        JSON.stringify({
          id: user.id,
          name: user.name,
          email: user.email,
        })
      );

      // 5. Simula a chamada da API e exibe o alerta de sucesso
      await new Promise((r) => setTimeout(r, 700));
      onSubmitSuccess?.(values);
      Alert.alert(
        "🎬 Bem-vindo de volta!",
        `Olá, ${user.name}! Login realizado com sucesso no CineFila!`
      );
    } catch (e: any) {
      // LOG 2: Verificando se ocorreu algum erro
      console.error("ERRO CAPTURADO NO CATCH (LOGIN):", e);
      Alert.alert("Erro ao entrar", e?.message ?? "Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const isSubmitting = loading || loadingProp;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar no CineFila</Text>
      <Text style={styles.subtitle}>Acesse sua conta e continue navegando</Text>

      <View style={styles.form}>
        <Text style={styles.label}>E-mail</Text>
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.email && styles.inputError]}
              placeholder="seu@email.com"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              accessible
              accessibilityLabel="Campo de e-mail"
              returnKeyType="next"
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        <Text style={[styles.label, { marginTop: 14 }]}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Sua senha"
                secureTextEntry={secure}
                textContentType="password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                accessible
                accessibilityLabel="Campo de senha"
                returnKeyType="done"
              />
              <TouchableOpacity
                onPress={() => setSecure((s) => !s)}
                style={styles.showBtn}
                accessibilityRole="button"
                accessibilityLabel={secure ? "Mostrar senha" : "Ocultar senha"}
              >
                <Text style={styles.showBtnText}>
                  {secure ? "Mostrar" : "Ocultar"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          disabled={isSubmitting}
          accessibilityRole="button"
          accessibilityLabel="Entrar"
        >
          {isSubmitting ? (
            <ActivityIndicator color={Colors.night} />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.lg,
    paddingTop: 80,
    backgroundColor: Colors.night,
  },
  title: {
    fontSize: Typography.fontSize["3xl"],
    fontFamily: "Poppins_700Bold",
    color: Colors.textPrimary,
  },
  subtitle: {
    marginTop: 6,
    fontSize: Typography.fontSize.base,
    color: Colors.slate,
    fontFamily: "Inter_400Regular",
  },
  form: {
    marginTop: 28,
    gap: Spacing.sm,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
    fontFamily: "Inter_500Medium",
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.nightLight,
    borderWidth: 1,
    borderColor: Colors.textMuted,
    color: Colors.textPrimary,
    fontFamily: "Inter_400Regular",
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: BorderRadius.md,
  },
  inputError: {
    borderColor: Colors.error,
  },
  error: {
    color: Colors.error,
    fontSize: Typography.fontSize.xs,
    fontFamily: "Inter_400Regular",
    marginTop: 4,
  },
  showBtn: {
    position: "absolute",
    right: 10,
    top: 10,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  showBtnText: {
    color: Colors.pipoca,
    fontSize: Typography.fontSize.xs,
    fontFamily: "Inter_600SemiBold",
  },
  button: {
    marginTop: Spacing.md,
    backgroundColor: Colors.pipoca,
    paddingVertical: 14,
    borderRadius: BorderRadius.md,
    alignItems: "center",
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.night,
    fontSize: Typography.fontSize.base,
    fontFamily: "Poppins_700Bold",
  },
});
