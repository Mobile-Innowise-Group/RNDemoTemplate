import { colors } from '@assets/colors';
import { LogoIcon } from '@assets/icons';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import { useReducedMotion } from 'react-native-reanimated';

type ChevronPropsType = { onBeforeGoBack?: () => void };

type UseMainScreenConfigurationReturn = {
  screenOptions: NativeStackNavigationOptions;
  mainRouteOptions: NativeStackNavigationOptions;
  Chevron: React.FC<ChevronPropsType>;
};

const useMainScreenConfiguration = (screenTitle: string): UseMainScreenConfigurationReturn => {
  const reducedMotion = useReducedMotion();

  const screenOptions: NativeStackNavigationOptions = {
    headerTitleAlign: 'center',
    headerTintColor: colors.black,
    title: screenTitle,
    animation: reducedMotion ? 'none' : 'default',
  };

  const mainRouteOptions: NativeStackNavigationOptions = {
    headerLeft: () => <LogoIcon />,
    title: '',
    headerTitle: '',
    headerRight: () => <Text style={{ color: colors.main }}>React Native</Text>,
  };

  const Chevron = ({ onBeforeGoBack }: ChevronPropsType) => (
    <TouchableOpacity onPress={onBeforeGoBack}>
      <Text>Back</Text>
    </TouchableOpacity>
  );

  return {
    screenOptions,
    mainRouteOptions,
    Chevron,
  };
};

export default useMainScreenConfiguration;
