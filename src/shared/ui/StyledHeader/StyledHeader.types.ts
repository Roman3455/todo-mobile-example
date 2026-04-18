import { ReactNode } from "react";
import { StyleProp, TextProps, TextStyle } from "react-native";

export type StyledHeaderProps = TextProps & {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}
