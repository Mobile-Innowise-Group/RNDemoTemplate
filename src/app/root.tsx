import { BootSplashWrapper, StatusBarWrapper } from '@core/components';
import { withInit } from '@core/hoc/with-init';
import { AppStack } from '@core/navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';

function Root(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBarWrapper>
        <BootSplashWrapper>
          <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
            <AppStack />
          </NavigationContainer>
        </BootSplashWrapper>
      </StatusBarWrapper>
    </SafeAreaProvider>
  );
}

const init = async () => {
  console.log('App initialization...');
};

export default withInit(init, Root);
