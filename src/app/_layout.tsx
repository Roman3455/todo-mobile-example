import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { ThemeProvider } from "@/shared/theme/providers";

/**
 * RootLayout — корневой layout приложения на базе Expo Router.
 *
 * Назначение:
 * - Инициализирует глобальные провайдеры приложения
 * - Настраивает безопасные зоны экрана (`SafeAreaProvider`)
 * - Подключает систему темизации через `ThemeProvider`
 * - Рендерит корневую навигацию (`Stack`)
 * - Управляет системным `StatusBar` в зависимости от темы устройства
 *
 * Источник темы:
 * - Используется `useColorScheme()` (React Native API)
 * - Определяет системную тему устройства: "light" | "dark"
 * - На основе этого задаётся стиль `StatusBar`
 *
 * Архитектура:
 * - SafeAreaProvider → инфраструктурный уровень (работа с экраном устройства)
 * - ThemeProvider → уровень дизайн-системы (темы и токены)
 * - Stack → уровень навигации (expo-router)
 *
 * Поведение:
 * - dark mode → светлый текст в статус баре (`style="light"`)
 * - light mode → тёмный текст (`style="dark"`)
 *
 * ⚠️ Важно:
 * - Все компоненты приложения рендерятся внутри `ThemeProvider`
 * - Это гарантирует доступ к теме через `useTheme()`
 */
export default function RootLayout() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <StatusBar style={scheme === "dark" ? "light" : "dark"} />
        <Stack screenOptions={{ headerShown: false }} />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
