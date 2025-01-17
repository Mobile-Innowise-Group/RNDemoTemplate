import { InteractionLayerProps } from 'src/types/navigation';
import { Pressable } from 'react-native';

export interface ItemProps extends Omit<InteractionLayerProps, 'onPress'> {
  selected?: boolean;
  action: InteractionLayerProps['onPress'];
  disabled?: boolean;
  id: string;
}

export function Item({ action, ...props }: ItemProps) {
  return <Pressable onPress={(event) => action && action(event)} {...props} />;
}
