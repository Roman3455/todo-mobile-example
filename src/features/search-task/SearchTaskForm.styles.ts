import { createThemedStyles } from "@/shared/lib";
import { spacing } from "@/shared/theme";

export const useSearchTaskFormStyles = createThemedStyles(() => ({
  icon: {
    paddingTop: spacing.md,
    paddingRight: spacing.lg
  }
}));
