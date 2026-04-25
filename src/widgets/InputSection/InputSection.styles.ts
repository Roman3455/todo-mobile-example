import { createThemedStyles } from "@/shared/lib";
import { spacing, variables } from "@/shared/theme";

export const useInputSectionStyles = createThemedStyles((theme) => ({
  container: {
    alignSelf: "stretch",
    paddingTop: spacing.lg,
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.lg
  },
  headerRadiusContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: variables.rightHeaderRadius,
    aspectRatio: 1,
    backgroundColor: theme.colors.header
  },
  headerRadius: {
    borderTopRightRadius: variables.rightHeaderRadius,
    backgroundColor: theme.colors.background
  }
}));
