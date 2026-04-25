import { View } from "react-native";
import { useHomeScreenStyles } from "./HomeScreen.styles";
import { Header } from "@/widgets/Header";
import { InputSection } from "@/widgets/InputSection";
import { TaskSection } from "@/widgets/TaskSection";

export default function HomeScreen() {
  const styles = useHomeScreenStyles();

  return (
    <View style={styles.container}>
      <Header />
      <InputSection />
      <TaskSection />
    </View>
  );
}
