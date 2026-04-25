import { View, Text } from "react-native";
import { Todo } from "./TodoItem.types";
import TodoToggle from "./TodoToggle/TodoToggle";
import TodoDeleteButton from "./TodoDeleteButton/TodoDeleteButton";
import { useTodoItemStyles } from "./TodoItem.styles";

export default function TodoItem(props: Todo) {
  const { title, isDone } = props;
  const styles = useTodoItemStyles();
  return (
    <View style={[styles.container, isDone ? styles.done : styles.undone]}>
      <TodoToggle isDone={isDone} />
      <Text style={[styles.title, isDone ? styles.titleDone : styles.titleUndone]}>{title}</Text>
      <TodoDeleteButton />
    </View>
  );
}
