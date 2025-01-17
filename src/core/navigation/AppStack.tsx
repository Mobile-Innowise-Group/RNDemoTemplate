import { AuthenticatedStack } from './AuthenticatedStack';
import { UnAuthenticatedStack } from './UnAuthenticatedStack';

const sessionTokens = {
  authToken: 'null', // TODO: Add logic for handling authToken
};

const AppStack = () => {
  const screenOptions = {};

  if (sessionTokens?.authToken) {
    return <AuthenticatedStack screenOptions={screenOptions} />;
  }

  return <UnAuthenticatedStack />;
};

export { AppStack };
