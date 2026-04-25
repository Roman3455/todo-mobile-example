import { createThemedStyles } from "@/shared/lib";
import { fontSize, fontWeight } from "@/shared/theme";

export const useTodoInfoStyles = createThemedStyles((theme) => ({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.bold,
    color: theme.colors.statisticText,
  },
}));
