
import { HomeScreen } from '@features/home';
import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme, View } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';


function Root(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
        <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <HomeScreen />
    </SafeAreaView>
  );
}

export default Root;
