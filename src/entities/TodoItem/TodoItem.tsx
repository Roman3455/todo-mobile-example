import { View, Text } from "react-native";
import { TodoItemProps } from "./TodoItem.types";
import TodoToggle from "./TodoToggle/TodoToggle";
import TodoDeleteButton from "./TodoDeleteButton/TodoDeleteButton";
import { useTodoItemStyles } from "./TodoItem.styles";

export default function TodoItem(props: TodoItemProps) {
  const { id, title, isDone, onDeleteTaskButtonPress, onTaskCompleteChange } = props;
  const styles = useTodoItemStyles();
  return (
    <View style={[styles.container, isDone ? styles.done : styles.undone]}>
      <TodoToggle todoId={id} isDone={isDone} onTaskCompleteChange={onTaskCompleteChange} />
      <Text style={[styles.title, isDone ? styles.titleDone : styles.titleUndone]}>{title}</Text>
      <TodoDeleteButton todoId={id} onDeleteTaskButtonPress={onDeleteTaskButtonPress} />
    </View>
  );
}
