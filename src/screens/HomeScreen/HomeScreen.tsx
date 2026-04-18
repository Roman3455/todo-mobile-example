import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "@/shared/theme";
import { useHomeScreenStyles } from "./HomeScreen.styles";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const styles = useHomeScreenStyles();

  return (
    <View style={ [styles.container, { paddingTop: insets.top + spacing.lg }] }></View>
  );
}
