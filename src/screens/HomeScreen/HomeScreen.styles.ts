import { createThemedStyles } from "@/shared/lib";
import { spacing } from "@/shared/theme";

export const useHomeScreenStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: spacing.lg,
    backgroundColor: theme.colors.background
  }
}));
