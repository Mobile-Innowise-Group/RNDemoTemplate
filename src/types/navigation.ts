import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { ReactElement, ReactNode } from 'react';
import { GestureResponderEvent, PressableProps, StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { ViewProps } from 'react-native-svg/lib/typescript/fabric/utils';

// Home Stack

export type HomeStackParamList = {
  Feed: undefined;
};

// Profile Stack

export type ProfileStackParamList = {
  Profile: undefined;
};

// Auth Stack

export type AuthenticatedStackProps = {
  screenOptions: NativeStackNavigationOptions | undefined;
};

export type AuthenticatedStackParamList = {
  TabNavigator: undefined;
};

// TabBar

export type TabBarProps = BottomTabBarProps & {
  defaultSelected?: keyof TabNavigatorParamList;
};

export type TabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

// Nav Bar

export type NavBarProps = {
  children: ReactElement<ItemProps> | Array<ReactElement<ItemProps>>;
  onChangeSelected: (index: string) => void;
  selected: string;
  style?: StyleProp<ViewStyle>;
};

// Common

export interface InteractionLayerProps extends PressableProps {
  onPress: (event: GestureResponderEvent) => void;
  children: ReactNode;
  disabled?: boolean;
  pressable?: boolean;
  style?: ViewProps['style'];
  forcePress?: boolean;
}

export interface ItemProps extends Omit<InteractionLayerProps, 'onPress'> {
  selected?: boolean;
  action: InteractionLayerProps['onPress'];
  disabled?: boolean;
  id: string;
}

export type ItemBottomProps = {
  icon: (props: SvgProps) => JSX.Element;
  activeIcon: (props: SvgProps) => JSX.Element;
  text: string;
  color?: SvgProps['color'];
} & Omit<ItemProps, 'children'>;

export type BottomNavBarProps = {
  defaultSelected: string;
  items: Array<ItemBottomProps>;
  style?: StyleProp<ViewStyle>;
} & Omit<NavBarProps, 'children' | 'onChangeSelected' | 'selected'>;
