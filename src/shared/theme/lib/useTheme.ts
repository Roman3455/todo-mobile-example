import { useContext } from "react";
import { ThemeContext } from "@/shared/theme/model";

/**
 * useTheme — кастомный хук для доступа к текущей теме приложения.
 *
 * Является обёрткой над `useContext(ThemeContext)` и предоставляет
 * типобезопасный доступ к объекту темы (`AppTheme`).
 *
 * Назначение:
 * - Упрощает использование контекста темы (без прямого импорта ThemeContext)
 * - Централизует точку доступа к теме (удобно для рефакторинга и масштабирования)
 *
 * Возвращает:
 * - Текущую тему (light / dark) с набором дизайн-токенов
 *   (цвета, типографика, отступы и др.)
 *
 * Пример использования:
 * const theme = useTheme();
 * theme.colors.background
 *
 * ⚠️ Требование:
 * - Должен использоваться внутри ThemeProvider,
 *   иначе будет возвращено значение по умолчанию (lightTheme)
 */
export const useTheme = () => useContext(ThemeContext);
