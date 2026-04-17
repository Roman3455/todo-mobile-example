import { createContext } from "react";
import { AppTheme, lightTheme } from "@/shared/theme";

/**
 * ThemeContext — глобальный React-контекст для управления темой приложения.
 *
 * Используется для передачи текущей темы (light / dark) через дерево компонентов
 * без необходимости пробрасывать пропсы вручную.
 *
 * Тип контекста строго задан через `AppTheme`, что обеспечивает типобезопасность
 * при работе с дизайн-токенами (цвета, отступы, типографика и т.д.).
 *
 * В качестве значения по умолчанию используется `lightTheme`.
 * Это значение применяется только в случае, если компонент не обёрнут в ThemeProvider.
 *
 * В production всегда предполагается использование ThemeProvider, который переопределяет
 * значение контекста (например, в зависимости от системной темы).
 *
 * Пример использования:
 * const theme = useContext(ThemeContext);
 * theme.colors.background
 */
export const ThemeContext = createContext<AppTheme>(lightTheme);
