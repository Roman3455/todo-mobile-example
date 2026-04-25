import { createThemedStyles } from "@/shared/lib";
import { fontSize, fontWeight } from "@/shared/theme";

export const useAddTaskFormStyles = createThemedStyles((theme) => ({
  buttonLabel: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: theme.colors.buttonPrimaryText,
  },
}));
