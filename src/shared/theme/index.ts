import { fontSize, fontWeight, lineHeight } from "./typography";
import { lightMode, darkMode } from "./colors";
import { shadows } from "./shadows";
import { components } from "./components";
import { spacing } from "./spacing";

export const theme = {
  spacing,
  lightMode,
  darkMode,
  shadows,
  fontSize,
  fontWeight,
  lineHeight,
  components,
} as const;

export type AppTheme = typeof theme;
