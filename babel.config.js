module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@app': './src/app',
          '@assets': './src/assets',
          // assets
          '@colors': './src/assets/colors',
          '@fonts': './src/assets/fonts',
          '@icons': './src/assets/icons',
          '@images': './src/assets/images',
          '@locales': './src/assets/locales',
          //
          // core
          '@core': './src/core',
          '@components': './src/core/components',
          '@constants': './src/core/constants',
          '@hooks': './src/core/hooks',
          '@navigation': './src/core/navigation',
          '@services': './src/core/services',
          '@utils': './src/core/utils',
          //
          // features
          '@features': './src/features',
          '@auth': './src/features/auth',
          '@home': './src/features/home',
          '@profile': './src/features/profile',
          //
          '@types': './src/types',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
