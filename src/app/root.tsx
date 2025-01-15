import AppStack from '@core/navigation/AppStack';
import { AnimatedBootSplash } from '@features/bootsplash/AnimatedBootSplash';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Platform, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import { Colors } from 'react-native/Libraries/NewAppScreen';

function Root(): React.JSX.Element {
  const [visible, setVisible] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    const init = async () => {};

    StatusBar.setBarStyle('dark-content');

    if (Platform.OS === 'android') {
      StatusBar.setBackgroundColor('transparent');
      StatusBar.setTranslucent(true);
    }

    init().finally(async () => {});
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
        <AppStack />
        {visible && (
          <AnimatedBootSplash
            onAnimationEnd={() => {
              setVisible(false);
            }}
          />
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Root;
