import { Welcome } from '@features/welcome';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useReducedMotion } from 'react-native-reanimated';

export type UnauthenticatedStackParamList = {
  Login: undefined;
};

const Stack = createNativeStackNavigator<UnauthenticatedStackParamList>();

export const UnAuthenticatedStack = () => {
  const reducedMotion = useReducedMotion();

  return (
    <Stack.Navigator
      initialRouteName={'Login'}
      screenOptions={{
        animation: reducedMotion ? 'none' : 'default',
        headerShown: false,
        orientation: 'portrait',
      }}
    >
      <Stack.Screen component={Welcome} name="Login" />
    </Stack.Navigator>
  );
};
