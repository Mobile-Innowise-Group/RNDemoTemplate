# RN Demo Teamplate

## 👋 Introduction

This is a starter React Native project with a minimal architecture, including **ESLint** и **Prettier** setup to ensure consistent code style and static code analysis.

## ✍️ Preparing the Project

```sh
yarn
```

## Starting Mobile

```sh
yarn ios
yarn ios --configuration=integration|staging|production
```

or

```sh
yarn android
yarn android --configuration=integration|staging|production
```

If you need to run a specific environment, you will need to suffix the command with the respective environment's configurations

```sh
integration | staging | production;
```

## 🦮 Accessibility

We have some ESLint rules in place to help us conform with the best practices in terms of accessibility. However, it's still recommended to manually test the apps.

## 🏎 Shortcuts

- 📱 Mobile

  - Debug menu on Physical Device
    - Shake the Device
  - Debug Menu
    - Android: Command + M
    - iOS: D

## Installation

1. Clone the repository:

```zsh
git clone  https://github.com/Mobile-Innowise-Group/RNDemoTemplate.git
```

2. Navigate to the project directory:

```zsh
cd RNDemoTemplate
```

3. Install dependencies:

```zsh
yarn
```
