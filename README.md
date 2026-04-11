# Mobile ToDo example app

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
