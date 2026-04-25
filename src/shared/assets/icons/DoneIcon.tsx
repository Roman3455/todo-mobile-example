import Svg, { Path } from "react-native-svg";
import { SVGIconType } from "./icon.types";

export default function DoneIcon(props: SVGIconType) {
  const { size = 24, strokeWidth = 1, strokeColor = "#757575" } = props;
  return (
    <Svg
      {...props}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      width={size}
      height={size}
      strokeWidth={strokeWidth}
      stroke={strokeColor}>
      <Path d="M5 14L8.23309 16.4248C8.66178 16.7463 9.26772 16.6728 9.60705 16.2581L18 6" />
    </Svg>
  );
}
