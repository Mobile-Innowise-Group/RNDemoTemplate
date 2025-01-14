// home-screen.tsx

import { useLocalizationContext } from '@assets/locales/localization-context';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ProfileScreen = () => {
  const { translations } = useLocalizationContext();
  return (
    <View style={styles.container}>
      <Text>{translations.profile.TITLE}</Text>
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

export { ProfileScreen };
