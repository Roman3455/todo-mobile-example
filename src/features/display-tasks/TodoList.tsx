import {StyleSheet, View} from "react-native";
import {TodoItem} from "@/entities/todo/ui";

export default function TodoList() {
  return (
    <View style={styles.container}>
      <TodoItem isDone={false} />
      <TodoItem isDone={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15
  }
})