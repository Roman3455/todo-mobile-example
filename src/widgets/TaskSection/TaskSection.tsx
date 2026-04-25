import { View } from "react-native";
import { Todo } from "@/entities/TodoItem";
import { useTaskSectionStyles } from "@/widgets/TaskSection/TaskSection.styles";
import { TodoInfo } from "@/features/stats";
import { TodoList } from "@/features/display-tasks";

export default function TaskSection() {
  const tasks: Todo[] = [
    { id: "task-1", title: "Убрать лоток", isDone: false },
    { id: "task-2", title: "Погладить кота", isDone: true },
    { id: "task-3", title: "Покормить кота", isDone: true },
  ];
  const styles = useTaskSectionStyles();

  return (
    <View style={styles.container}>
      <TodoInfo total={tasks.length} done={tasks.filter(t => t.isDone).length} />
      <TodoList tasks={tasks} />
    </View>
  );
}
