import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useReducedMotion } from 'react-native-reanimated';
import { TabNavigator } from './tabs';
import { AuthenticatedStackParamList, AuthenticatedStackProps } from 'src/types/navigation';

const RootStackNavigator = createNativeStackNavigator<AuthenticatedStackParamList>();
const reducedMotion = useReducedMotion();

export const AuthenticatedStack = ({ screenOptions }: AuthenticatedStackProps) => {
  return (
    <RootStackNavigator.Navigator
      screenOptions={{
        animation: reducedMotion ? 'none' : 'default',
        headerShown: false,
        orientation: 'portrait',
      }}
    >
      <RootStackNavigator.Screen component={TabNavigator} name="TabNavigator" />
    </RootStackNavigator.Navigator>
  );
};
