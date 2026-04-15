import {StyleSheet, Text, View} from "react-native";
import {Button} from "@/shared/ui/Button";
import {theme} from "@/shared/theme";

export default function TodoInfo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Done 1 form 2</Text>
      <Button isAccent={false}>
        <Text style={styles.text}>Delete All</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  text: {
    fontSize: theme.fontSize.md,
    fontWeight: "600"
  }
});
