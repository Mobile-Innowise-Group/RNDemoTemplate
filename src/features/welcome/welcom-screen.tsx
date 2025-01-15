// home-screen.tsx

import { useLocalizationContext } from '@assets/locales/localization-context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Welcome = () => {
  const { translations } = useLocalizationContext();
  return (
    <View style={styles.container}>
      <Text>{translations.welcome.TITLE}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export { Welcome };
