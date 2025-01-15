import BootSplash from 'react-native-bootsplash';

import { AuthenticatedStack } from './AuthenticatedStack';
import { UnAuthenticatedStack } from './UnAuthenticatedStack';

const sessionTokens = {
  authToken: null,
};

const AppStack = () => {
  const screenOptions = {};

  if (sessionTokens?.authToken) {
    return <AuthenticatedStack screenOptions={screenOptions} />;
  }

  return <UnAuthenticatedStack />;
};

export default AppStack;
