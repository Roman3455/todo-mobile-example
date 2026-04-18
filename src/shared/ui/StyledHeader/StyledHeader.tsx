import { Text } from "react-native";
import { StyledHeaderProps } from "@/shared/ui/StyledHeader/StyledHeader.types";
import { useStyledHeaderStyles } from "@/shared/ui/StyledHeader/StyledHeader.styles";

export default function StyledHeader(props: StyledHeaderProps) {
  const { children, style, ...rest } = props;
  const styles = useStyledHeaderStyles();
  return (
    <Text
      style={[styles.header, style]}
      {...rest}
    >
      {children}
    </Text>
  );
}
