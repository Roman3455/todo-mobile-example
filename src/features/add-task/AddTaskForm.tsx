import { Text } from "react-native";
import { InputField } from "@/shared/ui/InputField";
import { Button } from "@/shared/ui/Button";
import { useAddTaskFormStyles } from "./AddTaskForm.styles";
import { AddTaskFormProps } from "@/features/add-task/AddTaskForm.types";

export default function AddTaskForm(props: AddTaskFormProps) {
  const { addTask } = props;
  const styles = useAddTaskFormStyles();

  return (
    <InputField
      placeholder="New task title"
      onSubmitEditing={() => addTask()}
      adornment={
        <Button buttonType="primary" onPress={() => addTask()}>
          <Text style={styles.buttonLabel}>Add</Text>
        </Button>
      }
    />
  );
}
