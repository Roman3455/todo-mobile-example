import { View } from "react-native";
import { useInputSectionStyles } from "./InputSection.styles";
import { AddTaskForm } from "@/features/add-task";
import { SearchTaskForm } from "@/features/search-task";

export default function InputSection() {
  const styles = useInputSectionStyles();

  return (
    <View style={styles.container}>
      <View style={styles.headerRadiusContainer}>
        <View style={ [styles.headerRadiusContainer, styles.headerRadius] }/>
      </View>
      <AddTaskForm />
      <SearchTaskForm />
    </View>
  );
}
