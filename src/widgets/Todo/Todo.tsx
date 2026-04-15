import { StyleSheet, Text, View } from "react-native";
import { SearchTaskForm } from "@/features/search-task";
import { AddTaskForm } from "@/features/add-task";
import { theme } from "@/shared/theme";
import {TodoInfo} from "@/features/stats";
import {TodoList} from "@/features/display-tasks";

export default function Todo() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>To Do List</Text>
      <AddTaskForm />
      <SearchTaskForm />
      <TodoInfo />
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    gap: theme.components.layoutGap,
  },
  title: {
    textAlign: "center",
    fontSize: theme.fontSize.xl,
    fontWeight: theme.fontWeight.bold,
    lineHeight: theme.lineHeight.xl,
    color: theme.lightMode.textPrimary,
  },
});
