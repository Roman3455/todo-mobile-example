import { useMemo } from "react";
import { useColorScheme } from "react-native";
import { ThemeContext } from "@/shared/theme/model";
import { darkTheme, lightTheme } from "@/shared/theme";
import { ThemeProps } from "./ThemeProvider.types";

/**
 * ThemeProvider — провайдер темы приложения (React Context).
 *
 * Отвечает за определение и передачу актуальной темы (light / dark)
 * во всё дерево компонентов через ThemeContext.
 *
 * Источник темы:
 * - Использует `useColorScheme()` из React Native для получения системной темы устройства.
 * - При изменении системной темы происходит автоматический перерасчёт значения.
 *
 * Оптимизация:
 * - `useMemo` предотвращает лишние перерасчёты и ререндеры,
 *   мемоизируя объект темы до изменения `scheme`.
 *
 * Поведение:
 * - Если система в dark mode → используется `darkTheme`
 * - В остальных случаях → `lightTheme`
 *
 * Контракт:
 * - Все дочерние компоненты (`children`) получают доступ к теме через `ThemeContext`
 * - Ожидается, что приложение обёрнуто в ThemeProvider на верхнем уровне (RootLayout)
 *
 * Пример использования:
 * const theme = useContext(ThemeContext);
 * theme.colors.background
 *
 * ⚠️ Важно:
 * - Значение темы должно быть referentially stable (что обеспечивается useMemo),
 *   иначе это приведёт к каскадным ререндерам потребителей контекста.
 */
export function ThemeProvider(props: ThemeProps) {
  const { children } = props;
  const scheme = useColorScheme();
  const theme = useMemo(() => {
    return scheme === "dark" ? darkTheme : lightTheme;
  }, [scheme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}
