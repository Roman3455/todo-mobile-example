import { createThemedStyles } from "@/shared/lib";
import { fontSize, fontWeight, lineHeight, spacing, variables } from "@/shared/theme";

export const useHeaderStyles = createThemedStyles((theme) => ({
  container: {
    alignSelf: "stretch",
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: variables.leftHeaderRadius,
    backgroundColor: theme.colors.header
  },
  title: {
    textAlign: "center",
    fontSize: fontSize.xxl,
    lineHeight: lineHeight.xxl,
    fontWeight: fontWeight.bold,
    color: theme.colors.headerText
  }
}));
