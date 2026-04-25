import { Pressable } from "react-native";
import { DoneIcon } from "@/shared/assets/icons";
import { TodoToggleProps } from "./TodoToggle.types";
import { useTodoToggleStyles } from "./TodoToggle.styles";
import { useTheme } from "@/shared/theme/lib";

export default function TodoToggle(props: TodoToggleProps) {
  const styles = useTodoToggleStyles();
  const theme = useTheme();

  return (
    <Pressable style={[styles.container, props.isDone ? styles.done : styles.undone]}>
      {props.isDone && <DoneIcon strokeWidth={2.5} strokeColor={theme.colors.background} />}
    </Pressable>
  );
}
