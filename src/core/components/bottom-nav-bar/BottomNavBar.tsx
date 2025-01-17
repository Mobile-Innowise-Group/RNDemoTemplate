import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useOS } from '@core/hooks/useOS';
import { colors } from '@assets/colors';
import { BottomNavBarProps } from 'src/types';
import { defaultIconProps } from '@core/constants';
import { NavBar, Item } from '@components/nav-bar';

export const BottomNavBar = ({
  items = [],
  defaultSelected,
  style,
  ...args
}: BottomNavBarProps) => {
  const [selected, setSelected] = useState<string>(defaultSelected);
  const { bottom } = useSafeAreaInsets();
  const { isAndroid } = useOS();
  return (
    <View style={styles.navBarContainer}>
      <NavBar
        {...args}
        selected={selected}
        style={[
          styles.styledNavBar,
          style,
          {
            paddingBottom: bottom,
            borderTopColor: colors.border,
            backgroundColor: isAndroid ? colors.white : colors.transparent,
          },
        ]}
        onChangeSelected={setSelected}
      >
        {useMemo(
          () =>
            items.map(
              ({ id, text, icon: Icon, activeIcon: ActiveIcon, color, action, ...itemProps }) => {
                const isSelected = id === selected;
                const iconProps = {
                  ...defaultIconProps,
                  color,
                };
                const SelectedIcon = isSelected ? ActiveIcon : Icon;

                return (
                  <Item {...itemProps} id={id} action={action} key={id} style={styles.styledItem}>
                    <View style={styles.iconContainer}>
                      <SelectedIcon {...iconProps} />
                    </View>
                    <Text style={[styles.styledText, { color }]}>{text}</Text>
                  </Item>
                );
              },
            ),
          [items, selected],
        )}
      </NavBar>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: colors.white,
  },
  iconContainer: {
    paddingTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styledNavBar: {
    margin: 0,
    justifyContent: 'space-between',
    borderTopWidth: 1,
  },
  styledItem: {
    flex: 1,
  },
  styledText: {
    padding: 0,
    fontStyle: 'normal',
    textAlign: 'center',
  },
});
