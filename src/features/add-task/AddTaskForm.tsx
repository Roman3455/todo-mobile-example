import { Text } from "react-native";
import { InputField } from "@/shared/ui/InputField";
import { Button } from "@/shared/ui/Button";
import { useAddTaskFormStyles } from "./AddTaskForm.styles";

export default function AddTaskForm() {
  const styles = useAddTaskFormStyles();

  return (
    <InputField
      placeholder="New task title"
      adornment={
        <Button buttonType="primary">
          <Text style={styles.buttonLabel}>Add</Text>
        </Button>
      }
    />
  );
}
