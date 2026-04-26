import { View } from "react-native";
import { useInputSectionStyles } from "./InputSection.styles";
import { AddTaskForm } from "@/features/add-task";
import { SearchTaskForm } from "@/features/search-task";

export default function InputSection() {
  const styles = useInputSectionStyles();

  const addTask = () => {
    console.log('Задача добавлена');
  }

  const filterTasks = (query: string) => {
    console.log(`Поиск: ${query}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRadiusContainer}>
        <View style={[styles.headerRadiusContainer, styles.headerRadius]} />
      </View>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearchInput={filterTasks} />
    </View>
  );
}
