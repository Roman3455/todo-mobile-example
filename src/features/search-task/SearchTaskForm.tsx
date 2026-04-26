import { SearchIcon } from "@/shared/assets/icons";
import { InputField } from "@/shared/ui/InputField";
import { useSearchTaskFormStyles } from "./SearchTaskForm.styles";
import { useTheme } from "@/shared/theme/lib";
import { variables } from "@/shared/theme";
import { SearchTaskFormProps } from "./SearchTaskForm.types";

export default function SearchTaskForm(props: SearchTaskFormProps) {
  const { onSearchInput } = props;
  const styles = useSearchTaskFormStyles();
  const theme = useTheme();

  return (
    <InputField
      placeholder="Search task"
      onChangeText={(query: string) => onSearchInput(query)}
      adornmentStyle={styles.icon}
      adornment={
        <SearchIcon
          size={variables.iconSize}
          strokeWidth={1.5}
          strokeColor={theme.colors.inputAdornment}
        />
      }
    />
  );
}
