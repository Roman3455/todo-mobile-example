import { createThemedStyles } from "@/shared/lib";
import { spacing } from "@/shared/theme";

export const useTodoListStyles = createThemedStyles(() => ({
  container: {
    gap: spacing.md,
  },
}));
