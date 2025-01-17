import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { ComponentType, useMemo } from 'react';
import { ProfileStackParamList } from 'src/types/navigation';
import useMainScreenConfiguration from '../hooks/useMainScreen';
import { ProfileScreen } from '@features/profile';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

type SocialRoute = {
  component: ComponentType;
  name: keyof ProfileStackParamList;
  options: NativeStackNavigationOptions;
};

const ProfileStack = () => {
  const { screenOptions, mainRouteOptions } = useMainScreenConfiguration('Profile');

  const routes = useMemo<Array<SocialRoute>>(
    () => [
      {
        component: ProfileScreen,
        name: 'Profile',
        options: {
          title: 'Profile',
          ...mainRouteOptions,
        },
        orientation: 'portrait',
      },
    ],
    [mainRouteOptions],
  );

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      {useMemo(() => routes.map((route) => <Stack.Screen key={route.name} {...route} />), [routes])}
    </Stack.Navigator>
  );
};

export { ProfileStack };
