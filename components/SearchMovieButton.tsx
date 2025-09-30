import React from "react";
import MovieActionButton, { MovieActionButtonProps } from "./MovieActionButton";

export type SearchMovieButtonProps = Omit<
  MovieActionButtonProps,
  "label" | "icon"
>;

export default function SearchMovieButton(props: SearchMovieButtonProps) {
  return (
    <MovieActionButton
      label="Buscar Filme"
      icon="🔎"
      accessibilityLabel="Botão para buscar filmes"
      {...props}
    />
  );
}
