import { ReactNode } from "react";
import { StyleProp, TextInputProps, TextStyle, ViewStyle } from "react-native";
import {SvgProps} from "react-native-svg";

export type InputFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  adornmentStyle?: StyleProp<ViewStyle>;
  adornment?: ReactNode;
}
