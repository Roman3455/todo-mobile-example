import { StyleSheet, View } from "react-native";
import { InputField } from "@/shared/ui/InputField";
import { Button } from "@/shared/ui/Button";
import { theme } from "@/shared/theme";
import { PlusIcon } from "@/shared/icons";

export default function AddTaskForm() {
  return (
    <View style={styles.container}>
      <InputField placeholder="New task title" />
      <Button buttonStyle={styles.button} isAccent={true}>
        <PlusIcon
          size={30}
          strokeWidth={2.5}
          strokeColor={theme.lightMode.background}
        />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    gap: 16,
  },
  button: {
    height: theme.components.buttonAccent.height,
    width: theme.components.buttonAccent.width,
  },
});
