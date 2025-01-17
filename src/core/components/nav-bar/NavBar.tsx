import { InteractionLayerProps, NavBarProps } from 'src/types/navigation';
import React, { Children, cloneElement, useMemo } from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, View } from 'react-native';

/**
 * NavBar generic component
 * @param {(index: string) => void} onChangeSelected Loading animation if is true
 * @param {ReactElement<ItemProps> | Array<ReactElement<ItemProps>>} children array of Item component
 * @param {string | undefined} defaultSelected defaultSelected Icon
 * @param props Rest of props
 *
 */

export function NavBar({ children, onChangeSelected, selected, style, ...props }: NavBarProps) {
  const renderedChildren = useMemo(() => {
    const onPressHandler = (
      id: string,
      event: GestureResponderEvent,
      action: ((event: GestureResponderEvent) => void) | undefined,
    ) => {
      if (selected !== id) {
        onChangeSelected(id);
      }
      action && action(event);
    };

    return Children.map(children, (child) => {
      return cloneElement(child, {
        action: (event: GestureResponderEvent) => {
          onPressHandler(child.props.id, event, child.props.action);
        },
        selected: child.props.id === selected,
      });
    });
  }, [children, onChangeSelected, selected]);

  return (
    <View style={[styles.container, style]} {...props}>
      {renderedChildren}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
});
