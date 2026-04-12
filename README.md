# Mobile ToDo example app

## Стек технологий

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)

- React Native: `0.81`
- Typescript: `5.9`
- Expo: `54`

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
