import { router } from "expo-router";
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CineFilaLogo from "../components/CineFilaLogo";
import Filmstrip from "../components/Filmstrip";

export default function WelcomeScreen() {
  const handleLogin = () => {
    router.push("/(auth)/login");
  };

  const handleRegister = () => {
    router.push("/(auth)/register");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

      {/* Header com logo/título */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <CineFilaLogo width={60} height={60} color="#FFD166" />
        </View>
        <Text style={styles.appName}>CineFila</Text>
        <Text style={styles.slogan}>Tudo que você quer ver, na sua fila.</Text>
        <Text style={styles.welcomeSubtitle}>
          Faça login ou crie uma conta para começar sua jornada cinematográfica
        </Text>
      </View>

      {/* Ilustração/Imagem central */}
      <View style={styles.imageContainer}>
        <Filmstrip width={320} height={80} color="#94A3B8" />
        <Text style={styles.imageText}>
          Salve aquela dica de filme para assistir quando tiver tempo!
        </Text>
      </View>

      {/* Botões de ação */}
      <View style={styles.actionContainer}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={handleLogin}
          accessibilityRole="button"
          accessibilityLabel="Fazer login"
        >
          <Text style={styles.primaryButtonText}> Entrar na Sessão</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={handleRegister}
          accessibilityRole="button"
          accessibilityLabel="Criar nova conta"
        >
          <Text style={styles.secondaryButtonText}> Criar Minha Conta</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.dividerLine} />
          <View style={styles.dividerLine} />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Todos os direitos reservados a equipe CineFila 🎬
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 20,
  },
  header: {
    alignItems: "center",
    paddingTop: 60,
    paddingBottom: 20,
  },
  logoContainer: {
    width: 80,
    height: 80,
    backgroundColor: "transparent",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  logoText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  appName: {
    fontSize: 36,
    fontWeight: "800",
    fontFamily: "Poppins_700Bold",
    color: "#FFD166",
    marginBottom: 4,
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  slogan: {
    fontSize: 14,
    color: "#FFD166",
    fontFamily: "Manrope_500Medium",
    fontStyle: "italic",
    marginBottom: 16,
    textAlign: "center",
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#e2e8f0",
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: "#94A3B8",
    fontFamily: "Inter_400Regular",
    textAlign: "center",
    lineHeight: 24,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  placeholderImage: {
    width: 200,
    height: 200,
    backgroundColor: "#1e293b",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#334155",
  },
  placeholderText: {
    fontSize: 80,
  },
  imageText: {
    fontSize: 16,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 16,
    fontStyle: "italic",
  },
  actionContainer: {
    paddingBottom: 20,
  },
  primaryButton: {
    backgroundColor: "#FFD166",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: "#0F172A",
    fontSize: 16,
    fontFamily: "Poppins_700Bold",
  },
  secondaryButton: {
    backgroundColor: "transparent",
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FFD166",
    marginBottom: 20,
  },
  secondaryButtonText: {
    color: "#FFD166",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#334155",
  },
  dividerText: {
    color: "#64748b",
    fontSize: 14,
    marginHorizontal: 16,
  },
  guestButton: {
    paddingVertical: 12,
    alignItems: "center",
  },
  guestButtonText: {
    color: "#94A3B8",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
    textDecorationLine: "underline",
  },
  footer: {
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 12,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 18,
  },
  linkText: {
    color: "#2DD4BF",
    textDecorationLine: "underline",
  },
});
