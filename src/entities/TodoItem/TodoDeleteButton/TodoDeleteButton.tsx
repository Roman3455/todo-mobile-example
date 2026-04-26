import { Pressable } from "react-native";
import { CloseIcon } from "@/shared/assets/icons";
import { useTheme } from "@/shared/theme/lib";
import { TodoDeleteButtonProps } from "./TodoDeleteButton.types";

export default function TodoDeleteButton(props: TodoDeleteButtonProps) {
  const { todoId, onDeleteTaskButtonPress } = props;
  const theme = useTheme();

  return (
    <Pressable onPress={() => onDeleteTaskButtonPress(todoId)}>
      <CloseIcon size={28} strokeWidth={5} strokeColor={theme.colors.todoItemDeleteButton} />
    </Pressable>
  );
}
