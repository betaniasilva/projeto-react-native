import React from 'react';
import Svg, { G, Line, Path, Rect } from 'react-native-svg';

interface FilmstripProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function Filmstrip({
  width = 300,
  height = 75,
  color = '#111111'
}: FilmstripProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 2048 512"
      preserveAspectRatio="none"
    >
      <G id="filmstrip">
        {/* Corpo da filmstrip */}
        <G id="body">
          <Path
            d="M 0,156 Q 341,86 682,156 Q 1024,226 1365,156 Q 1706,86 2048,156 L 2048,356 Q 1706,426 1365,356 Q 1024,286 682,356 Q 341,426 0,356 Z"
            fill="none"
            stroke={color}
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </G>

        {/* Perfurações superiores */}
        <G id="sprockets">
          {/* Perfurações da borda superior */}
          <Rect x="0" y="186" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="80" y="180" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="160" y="174" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="240" y="168" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="320" y="162" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="400" y="156" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="480" y="150" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="560" y="144" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="640" y="138" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="720" y="132" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="800" y="138" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="880" y="144" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="960" y="150" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1040" y="156" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1120" y="162" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1200" y="168" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1280" y="174" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1360" y="180" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1440" y="186" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1520" y="192" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1600" y="186" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1680" y="180" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1760" y="174" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1840" y="168" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1920" y="162" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="2000" y="156" width="48" height="20" fill="white" stroke={color} strokeWidth="2" />

          {/* Perfurações da borda inferior */}
          <Rect x="0" y="306" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="80" y="312" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="160" y="318" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="240" y="324" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="320" y="330" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="400" y="336" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="480" y="342" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="560" y="348" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="640" y="354" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="720" y="360" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="800" y="354" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="880" y="348" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="960" y="342" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1040" y="336" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1120" y="330" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1200" y="324" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1280" y="318" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1360" y="312" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1440" y="306" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1520" y="300" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1600" y="306" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1680" y="312" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1760" y="318" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1840" y="324" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="1920" y="330" width="40" height="20" fill="white" stroke={color} strokeWidth="2" />
          <Rect x="2000" y="336" width="48" height="20" fill="white" stroke={color} strokeWidth="2" />
        </G>

        {/* Divisórias dos quadros */}
        <G id="frames">
          <Line x1="100" y1="180" x2="100" y2="318" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(5 100 249)" />
          <Line x1="200" y1="172" x2="200" y2="324" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-2 200 248)" />
          <Line x1="300" y1="164" x2="300" y2="332" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-8 300 248)" />
          <Line x1="400" y1="156" x2="400" y2="340" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-12 400 248)" />
          <Line x1="500" y1="148" x2="500" y2="348" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-15 500 248)" />
          <Line x1="600" y1="140" x2="600" y2="356" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-18 600 248)" />
          <Line x1="700" y1="132" x2="700" y2="364" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-20 700 248)" />
          <Line x1="800" y1="140" x2="800" y2="356" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-18 800 248)" />
          <Line x1="900" y1="148" x2="900" y2="348" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-15 900 248)" />
          <Line x1="1000" y1="156" x2="1000" y2="340" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-12 1000 248)" />
          <Line x1="1100" y1="164" x2="1100" y2="332" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-8 1100 248)" />
          <Line x1="1200" y1="172" x2="1200" y2="324" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-2 1200 248)" />
          <Line x1="1300" y1="180" x2="1300" y2="316" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(5 1300 248)" />
          <Line x1="1400" y1="188" x2="1400" y2="308" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(12 1400 248)" />
          <Line x1="1500" y1="196" x2="1500" y2="300" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(18 1500 248)" />
          <Line x1="1600" y1="188" x2="1600" y2="308" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(12 1600 248)" />
          <Line x1="1700" y1="180" x2="1700" y2="316" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(5 1700 248)" />
          <Line x1="1800" y1="172" x2="1800" y2="324" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-2 1800 248)" />
          <Line x1="1900" y1="164" x2="1900" y2="332" stroke={color} strokeWidth="4" strokeLinecap="round" transform="rotate(-8 1900 248)" />
        </G>
      </G>
    </Svg>
  );
}
