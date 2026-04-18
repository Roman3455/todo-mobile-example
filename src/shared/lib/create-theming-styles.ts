import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { useTheme } from "@/shared/theme/lib";

import type {AppTheme} from "@/shared/theme";

/**
 * createThemedStyles — фабрика для создания theme-aware StyleSheet-хуков.
 *
 * Назначение:
 * - Инкапсулирует доступ к текущей теме через `useTheme()`
 * - Позволяет создавать стили на основе активной темы (`light` / `dark`)
 * - Мемoизирует результат, чтобы `StyleSheet.create(...)` не вызывался
 *   на каждом рендере без необходимости
 *
 * Как работает:
 * 1. Принимает `factory` — функцию, которая получает текущую тему (`AppTheme`)
 *    и возвращает объект стилей
 * 2. Возвращает кастомный хук `useThemedStyles`
 * 3. Внутри хука вызывается `useTheme()` для получения текущей темы
 * 4. Стили пересоздаются только тогда, когда изменяется объект темы
 *
 * Преимущества:
 * - Убирает дублирование `useTheme() + useMemo() + StyleSheet.create(...)`
 * - Делает стили декларативными и привязанными к design system
 * - Централизует паттерн создания динамических theme-based стилей
 *
 * Типизация:
 * - `T` ограничен `StyleSheet.NamedStyles<T>`, что позволяет сохранить
 *   строгую типизацию ключей стилей и их структуры
 * - `factory` обязан вернуть корректный объект React Native стилей
 *
 * Пример использования:
 * const useStyles = createThemedStyles((theme) => ({
 *   container: {
 *     flex: 1,
 *     backgroundColor: theme.colors.background,
 *   },
 *   title: {
 *     color: theme.colors.textPrimary,
 *   },
 * }));
 *
 * function MyComponent() {
 *   const styles = useStyles();
 *
 *   return <View style={styles.container} />;
 * }
 *
 * Важно:
 * - `createThemedStyles(...)` вызывается вне компонента
 * - `useThemedStyles()` вызывается внутри компонента, как обычный хук
 * - Стили обновятся при смене темы, если `ThemeProvider` отдаст новое значение
 */
export function createThemedStyles<T extends StyleSheet.NamedStyles<T>>(factory: (theme: AppTheme) => T) {
  return function useThemedStyles() {
    const theme = useTheme();

    return useMemo(() => {
      return StyleSheet.create(factory(theme));
    }, [theme]);
  };
}
