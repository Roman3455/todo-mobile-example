import { Todo } from "@/entities/TodoItem/TodoItem.types";

export type TodoListProps = {
  tasks: Todo[];
  onDeleteTaskButtonPress: (todoId: string) => void;
  onTaskCompleteChange: (todoId: string, isDone: boolean) => void;
};
