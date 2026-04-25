import { createThemedStyles } from "@/shared/lib";
import { spacing } from "@/shared/theme";

export const useTaskSectionStyles = createThemedStyles(() => ({
  container: {
    alignSelf: "stretch",
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
}));
