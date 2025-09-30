import React from "react";
import MovieActionButton, { MovieActionButtonProps } from "./MovieActionButton";

export type MovieQueueButtonProps = Omit<
  MovieActionButtonProps,
  "label" | "icon"
>;

export default function MovieQueueButton(props: MovieQueueButtonProps) {
  return (
    <MovieActionButton
      label="Fila de Filmes"
      icon="🎟️"
      accessibilityLabel="Botão para acessar a fila de filmes"
      {...props}
    />
  );
}
