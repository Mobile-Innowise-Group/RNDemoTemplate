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

4. Pods install

```zsh
cd ios && pod install
```

## Main Branches
	1.	main
	•	Contains stable, production-ready code.
	•	This branch is used for releases.
	•	Direct commits to main should be avoided (use Pull Requests instead).
	2.	develop
	•	This is the integration branch where the latest code from all developers is merged.
	•	It may be less stable than main but should be functional enough for testing and ongoing development.
	•	All feature branches should merge into develop.

## Example Branch Structure

```plaintext
main
  └── release/1.0.0
       └── hotfix/fix-critical-error
develop
  └── feature/user-authentication
  └── bugfix/fix-login-issue
```
