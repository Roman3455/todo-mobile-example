import { createThemedStyles } from "@/shared/lib";
import { radius, variables } from "@/shared/theme";

export const useTodoToggleStyles = createThemedStyles((theme) => ({
  container: {
    borderRadius: radius.sm,
  },
  done: {
    backgroundColor: theme.colors.todoItemToggleBackgroundDone,
  },
  undone: {
    width: variables.iconSize,
    height: variables.iconSize,
    borderWidth: 1.5,
    borderColor: theme.colors.todoItemToggleBorderUndone,
  },
}));
