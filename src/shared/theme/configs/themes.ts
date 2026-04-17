// Реализация светлой темы
export const lightTheme = {
  mode: "light",
  colors: {
    background: "#e5ebf3",
    accent: "#00b8d7",
  },
  // buttonBackground: "#2c2c2c",
  // inputBorder: "#d9d9d9",
  // textPrimary: "#000000",
  // textSecondary: "#f5f5f5",
  // textAlternative: "#757575",
  // placeholderText: "#b3b3b3",
}

// Реализация темной темы
export const darkTheme = {
  mode: "dark",
  colors: {
    background: "#2D2F36",
    accent: "#00b8d7",
  },
  // bodyBackground: "#192230",
  // buttonBackground: "#2c2c2c",
  // inputBorder: "#2c2f38",
  // textPrimary: "#e5e5e5",
  // textSecondary: "#f5f5f5",
  // textAlternative: "#757575",
  // placeholderText: "#b3b3b3",
}

// Контракт по типам темы
export type AppTheme = typeof lightTheme;
