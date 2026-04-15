import {Pressable, StyleSheet } from "react-native";
import {theme} from "@/shared/theme";
import {DoneIcon} from "@/shared/icons";

type TodoToggleProps = {
  isDone: boolean;
}

export default function TodoToggle(props: TodoToggleProps) {
  return (
    <Pressable style={[styles.container, props.isDone ? styles.done : styles.notDone]}>
      {props.isDone && <DoneIcon
        width={theme.components.icons.todoToggle.size}
        height={theme.components.icons.todoToggle.size}
        strokeWidth={2}
        strokeColor={theme.lightMode.background}
      />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
  },
  done: {
    backgroundColor: theme.lightMode.accent,
  },
  notDone: {
    width: theme.components.icons.todoToggle.size,
    height: theme.components.icons.todoToggle.size,
    borderWidth: theme.components.icons.todoToggle.borderWidth,
    borderColor: theme.lightMode.textAlternative,
  }
});
