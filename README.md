# Mobile ToDo example app

## Стек технологий

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

- React Native: `0.81`
- Typescript: `5.9`
- Expo: `54`

## Содержание

- [Инициализация](#инициализация)
- [Светлая и темная темы](#светлая-и-темная-темы)

## Инициализация

### 1. Шаблон проекта **React Native + Expo** на TS

- Развернуть проект с пустым шаблоном:

```bash
npx create-expo-app@latest --template blank-typescript .
```

- Обновить `.gitignore` файл;

### 2. Установка зависимости **babel-preset-expo**

- Установить зависимости:

```bash
npx expo install babel-preset-expo
```

- Создать файл в корне проекта `babel.config.js`:

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
  };
};
```

### 3. Установка **ESLint** и **Prettier**

- Установить зависимость ESLint и сконфигурировать:

```bash
npx expo install eslint eslint-config-expo --dev
npx expo lint
```

- Установить зависимость Prettier:

```bash
npx expo install prettier eslint-config-prettier eslint-plugin-prettier --dev
```

- Добавить команды в `package.json`:

```json
{
  "scripts": {
    "lint": "expo lint",
    "format": "prettier --write .",
    "format:check": "prettier . --check"
  }
}
```

- Добавить конфигурацию в `eslint.config.js`:

```js
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");

module.exports = defineConfig([
  expoConfig,
  eslintPluginPrettierRecommended,
  {
    ignores: ["dist/*"],
  },
]);
```

- Создать `.prettierrc` в корне проекта для кастомной конфигурации:

```json
{
  "printWidth": 100,
  "tabWidth": 2,
  "singleQuote": true,
  "bracketSameLine": true
}
```

### 4. Добавление Makefile в корень проекта

### 5. Установка **Expo Router**

- Установить зависимости:

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

- `expo-router` — файловый роутер для Expo (позволяет строить навигацию через структуру файлов).
- `react-native-safe-area-context` — управление safe areas. Safe area — это зоны экрана, которые нельзя перекрывать UI,
  Без этого UI может залезать под системные элементы.
- `react-native-screens` — оптимизация навигации. Это делает переходы между экранами быстрее.
- `expo-linking` — работа с deep links. Deep link — это ссылка, которая открывает конкретный экран приложения.
  Expo Router использует его внутри для маршрутизации.
- `expo-constants` — доступ к системной информации приложения. Позволяет получать: app version, Expo config,
  device info, environment.
- `expo-status-bar` — управление статус баром. Status bar — это верхняя панель устройства: время, батарея, сеть.
  Позволяет менять: цвет, стиль, прозрачность.

- Установить точку входа в `package.json`:

```json
{
  "main": "expo-router/entry"
}
```

- Внести изменения в `app.json`:

```json
{
  "scheme": "your-app-scheme",
  "experiments": {
    "typedRoutes": true
  }
}
```

- Сконфигурировать **path aliases** в `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": ["**/*.ts", "**/*.tsx", ".expo/types/**/*.ts", "expo-env.d.ts"]
}
```

- Создать директории `src/app` и пометить `/src` как `resource root`;

- Создать в `/app` файл `index.tsx`:

```tsx
import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false, animation: "default" }} />;
}
```

- Создать в `/app` файл `_layout.tsx`:

```tsx
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

- Удалить `App.tsx` & `index.ts`;

### 6. Подключение поддержки SVG

- Установить зависимости:

```bash
npx expo install react react-dom react-native-web react-native-svg
```

## Светлая и темная темы

_Здесь рассматривается не пользовательское, а системное переключение светлой и темной темы._

### 1. Настройка **app.json**

- Установить автоматическое переключение темы:

```json
{
  "expo": {
    "userInterfaceStyle": "auto"
  }
}
```

### 2. Создание дизайн-токенов

- Создать файлы типа `themes.ts`, `typography.ts`, `spacing.ts`, `shadows.ts` и пр. в директории
  `src/shared/theme/configs`;

- Пример цветовой схемы `themes.ts`:

```ts
export const lightTheme = {
  mode: "light",
  colors: {
    background: "#e5ebf3",
    accent: "#00b8d7",
  },
};
export const darkTheme = {
  mode: "dark",
  colors: {
    background: "#2D2F36",
    accent: "#00b8d7",
  },
};
export type AppTheme = typeof lightTheme;
```

- `mode` — семантический флаг темы (**"light"** | **"dark"**), используется для переключения UI и логики
  (например, статусбар, иконки);
- `colors` — токены (design tokens), которые будут браться для стилизации;
- также сюда можно добавить тени и прочие элементы, которые зависят от темы;

- Тип темы:

```ts
export type AppTheme = typeof lightTheme;
```

- `typeof lightTheme` → TypeScript извлекает структуру объекта;
- `AppTheme` становится типом:

```ts
type AppTheme = {
  mode: string;
  colors: {
    background: string;
    accent: string;
  };
};
```

- `AppTheme` — это контракт, которому должны соответствовать все темы.

**Итог**

- `lightTheme` / `darkTheme` — конкретные реализации;
- `AppTheme` — тип-контракт;
- `typeof` — связывает runtime и типы;
- `as const` — делает типизацию строгой.

### 3. Создание Theme Context

`ThemeContext` — это глобальный механизм доступа к теме приложения (**light** / **dark**), основанный на
системной настройке устройства.

Решает задачи:

- централизованного доступа к design tokens;
- автоматического переключения темы;
- устранения prop drilling.

- Создать `theme-context.ts` в директории `src/shared/theme/model`;

```tsx
import { createContext } from "react";
import { AppTheme, lightTheme } from "@/shared/theme";

export const ThemeContext = createContext<AppTheme>(lightTheme);
```

- Создает глобальный контекст;
- Тип: `AppTheme` (контракт темы);
- `lightTheme` — fallback (если Provider отсутствует).

### 4. Theme Provider

**Отвечает за определение и передачу актуальной темы (light / dark) во всё дерево компонентов через
ThemeContext.**

Источник темы:

- Использует `useColorScheme()` из React Native для получения системной темы устройства.
- При изменении системной темы происходит автоматический перерасчёт значения.

```ts
const scheme = useColorScheme();
```

`useColorScheme()` — хук из React Native:

- `light` → светлая тема;
- `dark` → темная тема;
- `null` → не определено (редко, но бывает).

Оптимизация:

- `useMemo` предотвращает лишние перерасчёты и ререндеры, мемоизируя объект темы до изменения `scheme`.

```ts
const theme = useMemo(() => {
  return scheme === "dark" ? darkTheme : lightTheme;
}, [scheme]);
```

### 5. **useTheme** hook

Предоставляет типобезопасный доступ к объекту темы (`AppTheme`).

```ts
export const useTheme = () => useContext(ThemeContext);
```

### 6. Подключение ThemeProvider

Для использования `ThemeProvider` в приложении необходимо обернуть **RootLayout** в него.

```tsx
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
```

### 7. Фабрика стилей

`createThemedStyles` — фабрика для создания theme-aware StyleSheet-хуков.

```tsx
export function createThemedStyles<T extends StyleSheet.NamedStyles<T>>(
  factory: (theme: AppTheme) => T,
) {
  return function useThemedStyles() {
    const theme = useTheme();

    return useMemo(() => {
      return StyleSheet.create(factory(theme));
    }, [theme]);
  };
}
```

- `createThemedStyles(...)` вызывается вне компонента;
- `useThemedStyles()` вызывается внутри компонента, как обычный хук;
- Стили обновятся при смене темы, если `ThemeProvider` отдаст новое значение.

### 8. Применение стилей

- Создание StyleSheet в отдельном файле;

```ts
export const useHomeScreenStyles = createThemedStyles((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: spacing.lg,
    backgroundColor: theme.colors.background,
  },
}));
```

- Использование StyleSheet в UI компоненте.

```tsx
export default function HomeScreen() {
  const styles = useHomeScreenStyles();

  return <View style={styles.container}></View>;
}
```

## Работа кнопок

### Пробрасывание пропсов

- Функции работающие при нажатии на кнопки хранятся в месте со всей информацией с
которой они работают.
- В данном случае это виджет Task section. Оттуда необходимые пропсы пробрасываются до
TodoItem и до его кнопок.
