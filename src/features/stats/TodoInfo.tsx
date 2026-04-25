import { Text, View } from "react-native";
import { Button } from "@/shared/ui/Button";
import { useTodoInfoStyles } from "./TodoInfo.styles";

export default function TodoInfo() {
  const styles = useTodoInfoStyles();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Done 1 form 2</Text>
      <Button buttonType="secondary">
        <Text style={styles.label}>Delete All</Text>
      </Button>
    </View>
  );
}
