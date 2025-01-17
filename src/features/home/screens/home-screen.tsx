// home-screen.tsx

import { colors } from '@assets/colors';
import { useLocalizationContext } from '@assets/locales/localization-context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = () => {
  const { translations } = useLocalizationContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.home.TITLE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: colors.main,
  },
});

export { HomeScreen };
