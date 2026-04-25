import { createThemedStyles } from "@/shared/lib";

export const useHomeScreenStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: theme.colors.background
  }
}));
