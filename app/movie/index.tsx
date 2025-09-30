import { router, useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import DislikedMoviesButton from "../../components/DislikedMoviesButton";
import FavoriteMoviesButton from "../../components/FavoriteMoviesButton";
import LogoutButton from "../../components/LogoutButton";
import MovieQueueButton from "../../components/MovieQueueButton";
import SearchMovieButton from "../../components/SearchMovieButton";
import {
  BorderRadius,
  Colors,
  Spacing,
  Typography,
} from "../../constants/Theme";
import { User, getCurrentUser, logout } from "../../utils/auth";

export default function MovieHubScreen() {
  const [user, setUser] = useState<User | null>(null);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;

      const loadUser = async () => {
        const currentUser = await getCurrentUser();
        if (isActive) {
          setUser(currentUser);
        }
      };

      loadUser();

      return () => {
        isActive = false;
      };
    }, [])
  );

  const handleSearchMovie = () => {
    Alert.alert("Buscar filme", "Aqui você poderá pesquisar filmes em breve.");
  };

  const handleQueue = () => {
    Alert.alert(
      "Fila de filmes",
      "Sua fila personalizada estará disponível aqui."
    );
  };

  const handleFavorites = () => {
    Alert.alert("Favoritos", "Veja seus filmes favoritos em breve.");
  };

  const handleDisliked = () => {
    Alert.alert(
      "Filmes que não gostei",
      "Acompanhe os filmes que não curtiram por aqui."
    );
  };

  const handleLogout = async () => {
    await logout();
    router.replace("/(auth)/login");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Olá, {user?.name ?? "cinéfilo"}! 🍿</Text>
        <Text style={styles.subtitle}>
          Escolha um dos caminhos abaixo para continuar sua jornada no CineFila.
        </Text>

        <View style={styles.buttonsGrid}>
          <SearchMovieButton onPress={handleSearchMovie} />
          <MovieQueueButton onPress={handleQueue} />
          <FavoriteMoviesButton onPress={handleFavorites} />
          <DislikedMoviesButton onPress={handleDisliked} />
        </View>

        <View style={styles.logoutContainer}>
          <LogoutButton onPress={handleLogout} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.night,
  },
  content: {
    paddingHorizontal: Spacing.lg,
    paddingTop: 80,
    paddingBottom: Spacing["3xl"],
    gap: Spacing.lg,
  },
  title: {
    fontSize: Typography.fontSize["3xl"],
    fontFamily: "Poppins_700Bold",
    color: Colors.pipoca,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: Typography.fontSize.base,
    fontFamily: "Inter_400Regular",
    lineHeight: Typography.fontSize.base * 1.5,
  },
  buttonsGrid: {
    marginTop: Spacing.md,
    gap: Spacing.md,
  },
  logoutContainer: {
    marginTop: Spacing.xl,
    backgroundColor: Colors.nightLight,
    borderRadius: BorderRadius.lg,
    padding: Spacing.md,
  },
});
