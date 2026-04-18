import { createThemedStyles } from "@/shared/lib";
import { fontSize, fontWeight, lineHeight } from "@/shared/theme";

export const useStyledHeaderStyles = createThemedStyles((theme) => ({
  header: {
    textAlign: "center",
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    lineHeight: lineHeight.xl,
    color: theme.colors.textPrimary
  }
}));
