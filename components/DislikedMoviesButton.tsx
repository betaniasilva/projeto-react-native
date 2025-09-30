import React from "react";
import MovieActionButton, { MovieActionButtonProps } from "./MovieActionButton";

export type DislikedMoviesButtonProps = Omit<
  MovieActionButtonProps,
  "label" | "icon"
>;

export default function DislikedMoviesButton(props: DislikedMoviesButtonProps) {
  return (
    <MovieActionButton
      label="Filmes que Não Gostei"
      icon="👎"
      accessibilityLabel="Botão para ver filmes que não gostei"
      {...props}
    />
  );
}
