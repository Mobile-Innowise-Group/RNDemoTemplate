// home-screen.tsx

import { colors } from '@assets/colors';
import { useLocalizationContext } from '@assets/locales/localization-context';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const ProfileScreen = () => {
  const [shouldThrowError, setShouldThrowError] = useState(false);
  const { translations } = useLocalizationContext();

  if (shouldThrowError) {
    throw new Error('Test Error Boundary');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.profile.TITLE}</Text>
      <View style={styles.gap} />
      <TouchableOpacity onPress={() => setShouldThrowError(true)} style={styles.button}>
        <Text style={{ color: colors.white }}>Test Error Boundary</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: colors.main,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    elevation: 3,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
  gap: {
    height: 10,
  },
});

export { ProfileScreen };
