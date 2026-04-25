import { createThemedStyles } from "@/shared/lib";
import { fontSize, radius, spacing } from "@/shared/theme";

export const useTodoItemStyles = createThemedStyles((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xl,
    borderRadius: radius.xl,
    borderWidth: 1,
    gap: spacing.md,

  },
  done: {
    backgroundColor: theme.colors.todoItemBackgroundDone,
    borderColor: theme.colors.todoItemBorderDone,
  },
  undone: {
    backgroundColor: theme.colors.todoItemBackgroundUndone,
    borderColor: theme.colors.todoItemBorderUndone

  },
  title: {
    flexGrow: 1,
    fontSize: fontSize.lg,
  },
  titleDone: {
    color: theme.colors.todoItemTextDone,
    textDecorationLine: "line-through"
  },
  titleUndone: {
    color: theme.colors.todoItemTextUndone
  }
}));
