import { ProfileFilledIcon, HomeFilledIcon } from '@assets/icons';
import { createElement, FC } from 'react';
import { TabNavigatorParamList } from 'src/types/navigation';

const tabBarIcons: Record<keyof TabNavigatorParamList, FC> = {
  HomeStack: HomeFilledIcon,
  ProfileStack: ProfileFilledIcon,
};

export type Props = {
  color: string;
  routeName: keyof TabNavigatorParamList;
};

const TabBarActiveIcon = ({ color, routeName }: Props) =>
  createElement<{ color: string }>(tabBarIcons[routeName] ?? HomeFilledIcon, {
    color,
  });

export default TabBarActiveIcon;
