import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from 'src/types/navigation';
import { HomeStack } from './HomeStack';
import { ProfileStack } from './ProfileStack';
import { TabBar } from './TabBar/TabBar';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <TabBar {...props} defaultSelected="HomeStack" />}
    >
      <Tab.Screen
        component={HomeStack}
        name="HomeStack"
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen
        component={ProfileStack}
        name="ProfileStack"
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
};
