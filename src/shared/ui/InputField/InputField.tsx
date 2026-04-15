import {ReactNode} from "react";
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { theme } from "@/shared/theme";

type InputFieldProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  adornmentStyle?: StyleProp<ViewStyle>;
  adornment?: ReactNode;
};

export default function InputField(props: InputFieldProps) {
  const {
    containerStyle,
    adornmentStyle,
    adornment,
    ...rest
  } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        style={styles.input}
        {...rest}
        placeholderTextColor={theme.lightMode.textAlternative}
      />
      {adornment
        ? (<View style={[styles.adornmentRight, ]}>{adornment}</View>)
        : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    height: theme.components.input.height,
  },
  input: {
    flex: 1,
    paddingHorizontal: theme.components.input.paddingHorizontal,
    borderRadius: theme.components.borderRadiusInfinite,
    backgroundColor: theme.lightMode.background,
    fontSize: theme.fontSize.lg,
    boxShadow: theme.shadows.inputField
  },
  adornmentRight: {
    position: 'absolute',
    right: 0,
    paddingRight: 16,
    paddingTop: 14
  }
});
