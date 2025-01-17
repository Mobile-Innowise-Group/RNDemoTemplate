import { HomeIcon, ProfileIcon } from '@assets/icons';
import { createElement, FC } from 'react';
import { TabNavigatorParamList } from 'src/types/navigation';

const tabBarIcons: Record<keyof TabNavigatorParamList, FC> = {
  HomeStack: HomeIcon,
  ProfileStack: ProfileIcon,
};

export type Props = {
  color: string;
  routeName: keyof TabNavigatorParamList;
  testID?: string;
};

const TabBarIcon = ({ color, routeName }: Props) =>
  createElement<{ color: string }>(tabBarIcons[routeName] ?? HomeIcon, {
    color,
  });

export default TabBarIcon;
