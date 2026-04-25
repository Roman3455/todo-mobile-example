import Svg, { Path } from "react-native-svg";
import { SVGIconType } from "./icon.types";

export default function PlusIcon(props: SVGIconType) {
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
      <Path d="M4 12H20M12 4V20" />
    </Svg>
  );
}
