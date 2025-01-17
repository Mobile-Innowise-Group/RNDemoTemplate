import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { StyleProp, ViewStyle } from 'react-native';
import TabBarActiveIcon from './TabBarActiveIcon';
import TabBarIcon from './TabBarIcon';
import { BottomNavBarProps, TabBarProps, TabNavigatorParamList } from 'src/types/navigation';
import { BottomNavBar } from '@core/components';
import { colors } from '@assets/colors';

export const TabBar: React.FC<TabBarProps> = ({
  state,
  descriptors,
  navigation,
  defaultSelected,
}) => {
  const currentRouteKey = state.routes?.[state.index]?.key ?? '';
  const { options: currentRouteOptions } = descriptors[
    currentRouteKey
  ] as BottomTabBarProps['descriptors'][number];
  const items: BottomNavBarProps['items'] = state.routes.map((route, index) => {
    const { options } = descriptors[route.key] as BottomTabBarProps['descriptors'][number];

    const label = options.title ?? route.name;

    const isFocused = state.index === index;
    const iconColor = isFocused ? colors.main : colors.bottomTabInactive;
    const textColor = isFocused ? colors.main : colors.bottomTabInactive;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true, params: route.params });
      }
    };

    return {
      id: route.name,
      text: label,
      icon: (props) => (
        <TabBarIcon
          {...props}
          color={iconColor}
          routeName={route.name as keyof TabNavigatorParamList}
        />
      ),
      activeIcon: (props) => (
        <TabBarActiveIcon
          {...props}
          color={iconColor}
          routeName={route.name as keyof TabNavigatorParamList}
        />
      ),
      action: onPress,
      color: textColor,
    };
  });

  return (
    <BottomNavBar
      defaultSelected={defaultSelected ?? items[0]?.id ?? ''}
      items={items}
      style={(currentRouteOptions.tabBarStyle ?? {}) as StyleProp<ViewStyle>}
    />
  );
};
