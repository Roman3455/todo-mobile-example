import { InputField } from "@/shared/ui/InputField";
import { StyleSheet, View } from "react-native";
import {SearchIcon} from "@/shared/icons";
import {theme} from "@/shared/theme";

export default function SearchTaskForm() {
  return (
    <View style={styles.container}>
      <InputField
        placeholder="Search task"
        adornment={
        <SearchIcon
          size={22}
          strokeWidth={1.5}
          stroke={theme.lightMode.buttonBackground}
        />
      }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
});
