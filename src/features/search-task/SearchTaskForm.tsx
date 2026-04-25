import { SearchIcon } from "@/shared/assets/icons";
import { InputField } from "@/shared/ui/InputField";
import { useSearchTaskFormStyles } from "./SearchTaskForm.styles";
import { useTheme } from "@/shared/theme/lib";
import { variables } from "@/shared/theme";

export default function SearchTaskForm() {
  const styles = useSearchTaskFormStyles();
  const theme = useTheme();

  return (
    <InputField
      placeholder="Search task"
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
