import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import AppImages from '../../constants/AppImages';
import AppRoutes from '../../constants/AppRoutes';
import { colors } from '../../theme/colors';
import SvgAppIcon from './svg_app_icon';

const tabDetails = {
  [AppRoutes.EXPLORE_TAB]: {
    label: 'Explore',
    icon: AppImages.searchBlackIcon,
  },
  [AppRoutes.POST_ITEM_TAB]: {
    label: 'Post an Item',
    icon: AppImages.postAdIcon,
  },
  [AppRoutes.LOGIN_TAB]: {
    label: 'Login',
    icon: AppImages.profileIcon,
  },
} as const;

export default function BottomBar({
  state,
  descriptors,
  navigation,
  insets,
}: BottomTabBarProps) {
  return (
    <View
      style={[
        styles.bottomBar,
        { paddingBottom: Math.max(insets.bottom, 5) },
      ]}
    >
      {state.routes.map((route, index) => {
        const details = tabDetails[route.name as keyof typeof tabDetails];
        const isActive = state.index === index;
        const color = isActive ? colors.primary : colors.inactive;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isActive && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({ type: 'tabLongPress', target: route.key });
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityLabel={
              descriptors[route.key].options.tabBarAccessibilityLabel
            }
            accessibilityState={isActive ? { selected: true } : {}}
            onPress={onPress}
            onLongPress={onLongPress}
            style={({ pressed }) => [styles.tab, pressed && styles.pressed]}
          >
            <SvgAppIcon icon={details.icon} color={color} size={20} />
            <Text
              style={[styles.label, { color }, isActive && styles.activeLabel]}
            >
              {details.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: colors.background,
    borderTopColor: colors.border,
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 8,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 7,
  },
  pressed: {
    opacity: 0.55,
  },
  label: {
    fontSize: 12,
    fontWeight: '400',
  },
  activeLabel: {
    fontWeight: '600',
  },
});
