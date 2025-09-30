import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../constants/Theme";
import MovieActionButton, { MovieActionButtonProps } from "./MovieActionButton";

export type LogoutButtonProps = Omit<
  MovieActionButtonProps,
  "label" | "icon" | "style"
>;

export default function LogoutButton(props: LogoutButtonProps) {
  return (
    <MovieActionButton
      label="Sair"
      icon="🚪"
      style={styles.logout}
      accessibilityLabel="Botão para sair da conta"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  logout: {
    backgroundColor: Colors.error,
    borderColor: Colors.error,
  },
});
