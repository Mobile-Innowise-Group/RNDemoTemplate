import { colors } from '@assets/colors';
import { useLocalizationContext } from '@assets/locales/localization-context';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const CustomFallback = (props: { error: Error; resetError: Function }) => {
  const { translations } = useLocalizationContext();
  const onPress = () => props.resetError();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.error.TITLE}</Text>
      <Text style={styles.errorText}>{props.error.toString()}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{translations.error.BTN_TITLE}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.red,
    marginBottom: 10,
  },
  errorText: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
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
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});

export { CustomFallback };
