import { ReactNode } from "react";
import { PressableProps, StyleProp, ViewStyle } from "react-native";

export type ButtonProps = PressableProps & {
  children: ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonType?: "primary" | "secondary";
};
