import { ReactNode } from "react";
import { Pressable, PressableProps, StyleProp, StyleSheet, ViewStyle } from "react-native";
import { theme } from "@/shared/theme";

type ButtonProps = PressableProps & {
  children: ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  isAccent: boolean;
};

export default function Button(props: ButtonProps) {
  const { children, buttonStyle, isAccent, ...rest } = props;
  return (
    <Pressable {...rest} style={[
      styles.button,
      isAccent ? styles.accent : styles.transparent,
      buttonStyle
    ]}>
      {children}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  accent: {
    borderRadius: theme.components.borderRadiusInfinite,
    color: theme.lightMode.background,
    backgroundColor: theme.lightMode.accent,
    boxShadow: theme.shadows.accentButton,
  },
  transparent: {}
});
