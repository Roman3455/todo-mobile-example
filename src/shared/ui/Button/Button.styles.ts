import { createThemedStyles } from "@/shared/lib";
import { radius, variables } from "@/shared/theme";

export const useButtonStyles = createThemedStyles((theme) => ({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    height: variables.inputHeight,
    width: variables.primaryButtonWidth,
    borderRadius: radius.full,
    backgroundColor: theme.colors.buttonPrimaryBackground,
  },
}));
