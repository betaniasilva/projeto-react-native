import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

interface LogoProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function CineFilaLogo({ width = 80, height = 80, color = '#FFD166' }: LogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 100 100" fill="none">
      {/* Fundo do bookmark */}
      <Path
        d="M20 10C20 4.47715 24.4772 0 30 0H70C75.5228 0 80 4.47715 80 10V90L50 75L20 90V10Z"
        fill={color}
      />

      {/* Área interna branca */}
      <Rect
        x="28"
        y="8"
        width="44"
        height="65"
        rx="6"
        fill="white"
      />

      {/* Ícone de play */}
      <Path
        d="M45 35L55 42L45 49V35Z"
        fill={color}
      />
    </Svg>
  );
}
