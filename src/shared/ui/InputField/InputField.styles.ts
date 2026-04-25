import { createThemedStyles } from "@/shared/lib";
import { fontSize, radius, spacing, variables } from "@/shared/theme";

export const useInputFieldStyles = createThemedStyles((theme) => ({
  container: {
    flexGrow: 1,
    height: variables.inputHeight,
  },
  input: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.full,
    fontSize: fontSize.lg,
    borderWidth: 1,
    color: theme.colors.inputText,
    borderColor: theme.colors.inputBorder,
    backgroundColor: theme.colors.inputBackground,
  },
  adornment: {
    position: "absolute",
    right: 0,
  },
}));
