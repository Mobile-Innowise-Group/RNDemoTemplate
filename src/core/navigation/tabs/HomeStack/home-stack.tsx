import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { ComponentType, useMemo } from 'react';
import useMainScreenConfiguration from '../hooks/useMainScreen';
import { HomeScreen } from '@features/home';
import { HomeStackParamList } from 'src/types/navigation';

const Stack = createNativeStackNavigator<HomeStackParamList>();

type SocialRoute = {
  component: ComponentType;
  name: keyof HomeStackParamList;
  options: NativeStackNavigationOptions;
};

const HomeStack = () => {
  const { screenOptions, mainRouteOptions } = useMainScreenConfiguration('Home');

  const routes = useMemo<Array<SocialRoute>>(
    () => [
      {
        component: HomeScreen,
        name: 'Feed',
        options: {
          title: 'Home',
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

export { HomeStack };
