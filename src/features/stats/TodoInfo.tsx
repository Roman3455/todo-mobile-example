import { Text, View } from "react-native";
import { Button } from "@/shared/ui/Button";
import { useTodoInfoStyles } from "./TodoInfo.styles";
import { TodoInfoProps } from "./TodoInfo.types";

export default function TodoInfo(props: TodoInfoProps) {
  const {total, done, onDeleteAllButtonPress } = props;
  const styles = useTodoInfoStyles();
  const hasTasks = total > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Done {done} form {total}</Text>
      {hasTasks && (
        <Button buttonType="secondary" onPress={onDeleteAllButtonPress}>
          <Text style={styles.label}>Delete All</Text>
        </Button>
      )}
    </View>
  );
}
