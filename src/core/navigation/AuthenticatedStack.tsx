import { HomeScreen } from '@features/home';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { useReducedMotion } from 'react-native-reanimated';

type AuthenticatedStackProps = {
  screenOptions: NativeStackNavigationOptions | undefined;
};

export type AuthenticatedStackParamList = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedStackParamList>();
const reducedMotion = useReducedMotion();

export const AuthenticatedStack = ({ screenOptions }: AuthenticatedStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        animation: reducedMotion ? 'none' : 'default',
        headerShown: false,
        orientation: 'portrait',
      }}
    >
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
};
