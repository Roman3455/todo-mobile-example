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
