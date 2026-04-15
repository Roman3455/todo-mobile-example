import {StyleSheet, Text, View} from "react-native";
import TodoToggle from "@/entities/todo/ui/TodoToggle";
import {theme} from "@/shared/theme";
import TodoDeleteButton from "@/entities/todo/ui/TodoDeleteButton";

type TodoItemProps = {
  isDone: boolean;
}

export default function TodoItem(props: TodoItemProps) {
  return (
    <View style={[styles.container, props.isDone ? styles.done : styles.notDone]}>
      <TodoToggle isDone={props.isDone} />
      <Text style={styles.text}>Купить корм для бубы</Text>
      <TodoDeleteButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 20,
    gap: 10,
    backgroundColor: theme.lightMode.background,
  },
  done: {
    boxShadow: theme.shadows.inputField
  },
  notDone: {
    boxShadow: theme.shadows.todoItem,
  },
  text: {
    flexGrow: 1,
    fontSize: theme.fontSize.lg,
  }
});
