import { TextInput, View } from "react-native";
import { InputFieldProps } from "./InputField.types";
import { useInputFieldStyles } from "./InputField.styles";
import { useTheme } from "@/shared/theme/lib";

export default function InputField(props: InputFieldProps) {
  const { containerStyle, inputStyle, adornmentStyle, adornment, ...rest } = props;
  const styles = useInputFieldStyles();
  const theme = useTheme();

  return (
    <View style={ [styles.container, containerStyle] }>
      <TextInput
        style={ [styles.input, inputStyle] }
        placeholderTextColor={ theme.colors.inputPlaceholder }
        {...rest}
      />
      {adornment
        ? (<View style={ [styles.adornment, adornmentStyle] }>{adornment}</View>)
        : null}
    </View>
  );
}
