/**
 * Paleta de cores "Noite de Cinema" - CineFila
 */
export const Colors = {
  // Paleta principal
  night: "#0F172A", // Fundo escuro principal
  pipoca: "#FFD166", // Destaque quente (amarelo pipoca)
  reelRed: "#FF4D3D", // Chamadas/erro (vermelho reel)
  mint: "#2DD4BF", // Confirmação/sucesso (verde menta)
  slate: "#94A3B8", // Texto secundário

  // Variações para melhor usabilidade
  nightLight: "#1E293B", // Variação mais clara do fundo
  nightDark: "#020617", // Variação mais escura

  // Tons de texto
  textPrimary: "#F8FAFC", // Texto principal (branco quase puro)
  textSecondary: "#CBD5E1", // Texto secundário claro
  textMuted: "#64748B", // Texto esmaecido

  // Estados
  success: "#2DD4BF", // Verde menta para sucesso
  error: "#FF4D3D", // Vermelho reel para erro
  warning: "#FFD166", // Amarelo pipoca para aviso
  info: "#38BDF8", // Azul para informação

  // Transparências
  overlay: "rgba(15, 23, 42, 0.8)",
  cardBg: "rgba(30, 41, 59, 0.6)",
};

/**
 * Tipografia - Fontes geométricas sans-serif
 */
export const Typography = {
  // Família de fontes (fallback para system fonts)
  fontFamily: {
    primary: "Inter_400Regular",
    primaryBold: "Inter_700Bold",
    secondary: "Manrope_400Regular",
    secondaryBold: "Manrope_700Bold",
    accent: "Poppins_400Regular",
    accentBold: "Poppins_700Bold",
  },

  // Tamanhos de fonte
  fontSize: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
    "4xl": 36,
    "5xl": 48,
  },

  // Pesos de fonte
  fontWeight: {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },

  // Altura da linha
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
};

/**
 * Espaçamentos consistentes
 */
export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  "2xl": 40,
  "3xl": 48,
};

/**
 * Border radius
 */
export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};
