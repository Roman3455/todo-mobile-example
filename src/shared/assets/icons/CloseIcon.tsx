import Svg, { Line } from "react-native-svg";
import { SVGIconType } from "./icon.types";

export default function CloseIcon(props: SVGIconType) {
  const {
    size = 24,
    strokeWidth = 1,
    strokeColor = "#757575"
  } = props;
  return (
    <Svg
      {...props}
      viewBox="0 0 64 64"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
    >
      <Line x1="16" y1="16" x2="48" y2="48" />
      <Line x1="48" y1="16" x2="16" y2="48" />
    </Svg>
  );
}
