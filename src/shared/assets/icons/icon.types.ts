import { SvgProps } from "react-native-svg";

export type SVGIconType = SvgProps & {
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  fillColor?: string;
};
