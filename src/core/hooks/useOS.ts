import { useMemo } from 'react';
import { Platform } from 'react-native';

export const useOS = () => {
  const isAndroid = useMemo(() => Platform.OS === 'android', []);

  const isIOS = useMemo(() => Platform.OS === 'ios', []);

  return {
    isAndroid,
    isIOS,
  };
};
