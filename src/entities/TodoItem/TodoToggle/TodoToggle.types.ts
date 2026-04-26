export type TodoToggleProps = {
  todoId: string;
  isDone: boolean;
  onTaskCompleteChange: (todoId: string, isDone: boolean) => void;
};
