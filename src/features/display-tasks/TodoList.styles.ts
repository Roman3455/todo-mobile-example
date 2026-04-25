import { createThemedStyles } from "@/shared/lib";
import { spacing } from "@/shared/theme";

export const useTodoListStyles = createThemedStyles((theme) => ({
  container: {
    gap: spacing.md
  }
}));
