import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { BorderRadius, Colors, Spacing, Typography } from '../../constants/Theme';

/**
 * RegisterScreen.tsx
 * - React Native + Expo + TypeScript
 * - Validação com React Hook Form + Zod
 * - Cadastro com nome, email, senha e confirmação de senha
 */

const schema = z.object({
  name: z.string().min(2, 'O nome deve ter ao menos 2 caracteres.'),
  email: z.string().email('Informe um e-mail válido.'),
  password: z.string().min(6, 'A senha deve ter ao menos 6 caracteres.'),
  confirmPassword: z.string().min(6, 'A confirmação de senha deve ter ao menos 6 caracteres.'),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'As senhas não conferem.',
  path: ['confirmPassword'],
});

type FormValues = z.infer<typeof schema>;

type Props = {
  onSubmitSuccess?: (values: FormValues) => void | Promise<void>;
  loading?: boolean;
};

export default function RegisterScreen({ onSubmitSuccess, loading: loadingProp }: Props) {
  const [securePassword, setSecurePassword] = useState(true);
  const [secureConfirmPassword, setSecureConfirmPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', password: '', confirmPassword: '' },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      setLoading(true);
      // 🔗 Chame sua API aqui. Exemplo:
      // const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/register`, {...})
      // if (!res.ok) throw new Error('Erro ao criar conta');

      // Por agora, só simula sucesso
      await new Promise((r) => setTimeout(r, 700));
      onSubmitSuccess?.(values);
      Alert.alert('🍿 Conta criada!', 'Bem-vindo ao CineFila! Sua jornada cinematográfica começa agora.');
    } catch (e: any) {
      Alert.alert('Erro ao criar conta', e?.message ?? 'Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const isSubmitting = loading || loadingProp;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao CineFila</Text>
      <Text style={styles.subtitle}>Crie sua conta e monte sua fila de filmes</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome</Text>
        <Controller
          control={control}
          name="name"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[styles.input, errors.name && styles.inputError]}
              placeholder="Seu nome completo"
              autoCapitalize="words"
              textContentType="name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              accessible
              accessibilityLabel="Campo de nome"
              returnKeyType="next"
            />
          )}
        />
        {errors.name && <Text style={styles.error}>{errors.name.message}</Text>}

        <Text style={[styles.label, { marginTop: 14 }]}>E-mail</Text>
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
        {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

        <Text style={[styles.label, { marginTop: 14 }]}>Senha</Text>
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={[styles.input, errors.password && styles.inputError]}
                placeholder="Sua senha"
                secureTextEntry={securePassword}
                textContentType="newPassword"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                accessible
                accessibilityLabel="Campo de senha"
                returnKeyType="next"
              />
              <TouchableOpacity
                onPress={() => setSecurePassword((s) => !s)}
                style={styles.showBtn}
                accessibilityRole="button"
                accessibilityLabel={securePassword ? 'Mostrar senha' : 'Ocultar senha'}
              >
                <Text style={styles.showBtnText}>{securePassword ? 'Mostrar' : 'Ocultar'}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

        <Text style={[styles.label, { marginTop: 14 }]}>Confirmar Senha</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, onBlur, value } }) => (
            <View>
              <TextInput
                style={[styles.input, errors.confirmPassword && styles.inputError]}
                placeholder="Confirme sua senha"
                secureTextEntry={secureConfirmPassword}
                textContentType="newPassword"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                accessible
                accessibilityLabel="Campo de confirmação de senha"
                returnKeyType="done"
              />
              <TouchableOpacity
                onPress={() => setSecureConfirmPassword((s) => !s)}
                style={styles.showBtn}
                accessibilityRole="button"
                accessibilityLabel={secureConfirmPassword ? 'Mostrar senha' : 'Ocultar senha'}
              >
                <Text style={styles.showBtnText}>{secureConfirmPassword ? 'Mostrar' : 'Ocultar'}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={[styles.button, isSubmitting && styles.buttonDisabled]}
          disabled={isSubmitting}
          accessibilityRole="button"
          accessibilityLabel="Criar conta"
        >
          {isSubmitting ? <ActivityIndicator /> : <Text style={styles.buttonText}>Criar Conta</Text>}
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
    fontSize: Typography.fontSize['3xl'],
    fontFamily: 'Poppins_700Bold',
    color: Colors.textPrimary,
  },
  subtitle: {
    marginTop: 6,
    fontSize: Typography.fontSize.base,
    color: Colors.slate,
    fontFamily: 'Inter_400Regular',
  },
  form: {
    marginTop: 28,
    gap: Spacing.sm,
  },
  label: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.sm,
    fontFamily: 'Inter_500Medium',
    marginBottom: 6,
  },
  input: {
    backgroundColor: Colors.nightLight,
    borderWidth: 1,
    borderColor: Colors.textMuted,
    color: Colors.textPrimary,
    fontFamily: 'Inter_400Regular',
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
    fontFamily: 'Inter_400Regular',
    marginTop: 4,
  },
  showBtn: {
    position: 'absolute',
    right: 10,
    top: 10,
    paddingHorizontal: Spacing.sm,
    paddingVertical: 4,
  },
  showBtnText: {
    color: Colors.pipoca,
    fontSize: Typography.fontSize.xs,
    fontFamily: 'Inter_600SemiBold',
  },
  button: {
    marginTop: Spacing.md,
    backgroundColor: Colors.pipoca,
    paddingVertical: 14,
    borderRadius: BorderRadius.md,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.night,
    fontSize: Typography.fontSize.base,
    fontFamily: 'Poppins_700Bold',
  },
});
