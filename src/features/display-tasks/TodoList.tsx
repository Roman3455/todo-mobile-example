import { View } from "react-native";
import { TodoItem } from "@/entities/TodoItem";
import { TodoListProps } from "@/features/display-tasks/TodoList.types";
import { useTodoListStyles } from "@/features/display-tasks/TodoList.styles";

export default function TodoList(props: TodoListProps) {
  const { tasks, onDeleteTaskButtonPress, onTaskCompleteChange } = props;
  const styles = useTodoListStyles();
  return (
    <View style={styles.container}>
      {tasks.map(({ id, title, isDone }) => (
        <TodoItem
          key={id}
          id={id}
          title={title}
          isDone={isDone}
          onDeleteTaskButtonPress={onDeleteTaskButtonPress}
          onTaskCompleteChange={onTaskCompleteChange}
        />
      ))}
    </View>
  );
}
