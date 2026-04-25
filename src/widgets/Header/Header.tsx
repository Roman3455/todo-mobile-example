import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { spacing } from "@/shared/theme";
import { useHeaderStyles } from "./Header.styles";

export default function Header() {
  const insets = useSafeAreaInsets();
  const styles = useHeaderStyles();

  return (
    <View style={[styles.container, { paddingTop: insets.top + spacing.xl }]}>
      <Text style={styles.title}>Daily Planner</Text>
    </View>
  );
}
