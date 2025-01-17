import { BootSplashWrapper, StatusBarWrapper } from '@core/components';
import { withInit } from '@core/hoc/with-init';
import { AppStack } from '@core/navigation';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { initialWindowMetrics, SafeAreaProvider } from 'react-native-safe-area-context';
import { CustomFallback, ErrorBoundary } from '@core/components/error';

function Root(): React.JSX.Element {
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <StatusBarWrapper>
        <BootSplashWrapper>
          <ErrorBoundary
            fallback={({ error, resetError }) => (
              <CustomFallback error={error} resetError={resetError} />
            )}
          >
            <NavigationContainer onReady={() => RNBootSplash.hide({ fade: true })}>
              <AppStack />
            </NavigationContainer>
          </ErrorBoundary>
        </BootSplashWrapper>
      </StatusBarWrapper>
    </SafeAreaProvider>
  );
}

const init = async () => {
  console.log('App initialization...');
};

export default withInit(init, Root);
