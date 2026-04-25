import { Pressable } from "react-native";
import { CloseIcon } from "@/shared/assets/icons";
import { useTheme } from "@/shared/theme/lib";

export default function TodoDeleteButton() {
  const theme = useTheme();

  return (
    <Pressable>
      <CloseIcon
        size={28}
        strokeWidth={5}
        strokeColor={theme.colors.todoItemDeleteButton}
      />
    </Pressable>
  );
}
