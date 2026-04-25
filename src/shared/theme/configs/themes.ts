import { colors } from "./colors";

// Реализация светлой темы
export const lightTheme = {
  mode: "light",
  colors: {
    background: colors.gray["0"],
    header: colors.azure["700"],
    headerText: colors.gray["0"],
    inputBackground: colors.aqua["100"],
    inputBorder: colors.aqua["200"],
    inputAdornment: colors.aqua["400"],
    inputPlaceholder: colors.gray["200"],
    inputText: colors.azure["800"],
    buttonPrimaryBackground: colors.aqua["600"],
    buttonPrimaryText: colors.gray["0"],
    statisticText: colors.azure["700"],
    todoItemBackgroundDone: colors.aqua["100"],
    todoItemBorderDone: colors.aqua["200"],
    todoItemBackgroundUndone: colors.aqua["200"],
    todoItemBorderUndone: colors.aqua["300"],
    todoItemTextUndone: colors.azure["800"],
    todoItemTextDone: colors.aquaGray,
    todoItemToggleBorderUndone: colors.aqua["400"],
    todoItemToggleBackgroundDone: colors.aqua["300"],
    todoItemDeleteButton: colors.aqua["400"],
  },
};

// Реализация темной темы
export const darkTheme = {
  mode: "dark",
  colors: {
    background: colors.gray["0"],
    header: colors.azure["700"],
    headerText: colors.gray["0"],
    inputBackground: colors.aqua["100"],
    inputBorder: colors.aqua["200"],
    inputAdornment: colors.aqua["400"],
    inputPlaceholder: colors.gray["200"],
    inputText: colors.azure["800"],
    buttonPrimaryBackground: colors.aqua["600"],
    buttonPrimaryText: colors.gray["0"],
    statisticText: colors.azure["700"],
    todoItemBackgroundDone: colors.aqua["100"],
    todoItemBorderDone: colors.aqua["200"],
    todoItemBackgroundUndone: colors.aqua["200"],
    todoItemBorderUndone: colors.aqua["300"],
    todoItemTextUndone: colors.azure["800"],
    todoItemTextDone: colors.aquaGray,
    todoItemToggleBorderUndone: colors.aqua["400"],
    todoItemToggleBackgroundDone: colors.aqua["300"],
    todoItemDeleteButton: colors.aqua["400"],
  },
};

// Контракт по типам темы
export type AppTheme = typeof lightTheme;
