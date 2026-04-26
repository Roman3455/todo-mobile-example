export type TodoItemProps = Todo & {
  onDeleteTaskButtonPress: (todoId: string) => void;
  onTaskCompleteChange: (todoId: string, isDone: boolean) => void;
}

export type Todo = {
  id: string;
  title: string;
  isDone: boolean;
};
