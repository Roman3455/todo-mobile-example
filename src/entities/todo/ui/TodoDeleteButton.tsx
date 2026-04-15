import {Pressable, StyleSheet} from "react-native";
import {CloseIcon} from "@/shared/icons";
import {theme} from "@/shared/theme";

export default function TodoDeleteButton() {
  return (
    <Pressable style={styles.container}>
      <CloseIcon size={30} strokeWidth={5} strokeColor={theme.lightMode.textAlternative} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
