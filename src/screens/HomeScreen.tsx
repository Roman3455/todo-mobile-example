import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { theme } from "@/shared/theme";
import { Todo } from "@/widgets/Todo";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 24 }]}>
      <Todo />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 24,
    backgroundColor: theme.lightMode.background,
  },
  form: {
    flexDirection: "column",
  },
  buttonText: {
    color: theme.lightMode.textSecondary,
  },
});
