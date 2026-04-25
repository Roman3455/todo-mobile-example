import { Pressable } from "react-native";
import { ButtonProps } from "./Button.types";
import { useButtonStyles } from "./Button.styles";

export default function Button(props: ButtonProps) {
  const {
    children,
    buttonStyle,
    buttonType = "secondary",
    ...rest
  } = props;
  const styles = useButtonStyles();

  return (
    <Pressable
      style={[
        styles.button,
        buttonType === "primary" ? styles.primary : null,
        buttonStyle
      ]}
      {...rest}
    >
      {children}
    </Pressable>
  );
}
