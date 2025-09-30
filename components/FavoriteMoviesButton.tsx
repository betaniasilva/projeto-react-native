import React from "react";
import MovieActionButton, { MovieActionButtonProps } from "./MovieActionButton";

export type FavoriteMoviesButtonProps = Omit<
  MovieActionButtonProps,
  "label" | "icon"
>;

export default function FavoriteMoviesButton(props: FavoriteMoviesButtonProps) {
  return (
    <MovieActionButton
      label="Filmes Favoritos"
      icon="⭐"
      accessibilityLabel="Botão para ver filmes favoritos"
      {...props}
    />
  );
}
