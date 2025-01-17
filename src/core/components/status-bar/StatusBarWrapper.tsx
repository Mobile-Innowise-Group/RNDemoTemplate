import { colors } from '@assets/colors';
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface StatusBarWrapperProps {
  children: React.ReactNode;
}

const StatusBarWrapper: React.FC<StatusBarWrapperProps> = ({ children }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : colors.white,
  };

  return (
    <>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {children}
    </>
  );
};

export { StatusBarWrapper };
