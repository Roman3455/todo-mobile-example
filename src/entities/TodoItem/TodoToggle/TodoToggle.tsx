import { Pressable } from "react-native";
import { DoneIcon } from "@/shared/assets/icons";
import { TodoToggleProps } from "./TodoToggle.types";
import { useTodoToggleStyles } from "./TodoToggle.styles";
import { useTheme } from "@/shared/theme/lib";

export default function TodoToggle(props: TodoToggleProps) {
  const { todoId, isDone, onTaskCompleteChange } = props;
  const { container, done, undone } = useTodoToggleStyles();
  const { colors } = useTheme();

  return (
    <Pressable
      style={[container, isDone ? done : undone]}
      onPress={() => onTaskCompleteChange(todoId, isDone)}
    >
      {isDone && <DoneIcon strokeWidth={2.5} strokeColor={colors.background} />}
    </Pressable>
  );
}
