import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppImages from '../../core/constants/AppImages';
import SvgAppIcon from '../../core/utils/components/svg_app_icon';

type Tab = 'explore' | 'post' | 'login';

const tabs: Array<{ key: Tab; label: string }> = [
  { key: 'explore', label: 'Explore' },
  { key: 'post', label: 'Post an Item' },
  { key: 'login', label: 'Login' },
];

function TabIcon({ name, color }: { name: Tab; color: string }) {
  const icon = {
    explore: AppImages.searchBlackIcon,
    post: AppImages.postAdIcon,
    login: AppImages.profileIcon,
  }[name];

  return <SvgAppIcon icon={icon} color={color} size={20} />;
}

function BottomBar({
  activeTab,
  onTabPress,
  style,
}: {
  activeTab: Tab;
  onTabPress: (tab: Tab) => void;
  style?: ViewStyle;
}) {
  return (
    <View style={[styles.bottomBar, style]}>
      {tabs.map(tab => {
        const isActive = activeTab === tab.key;
        const color = isActive ? '#6D94D0' : '#777777';

        return (
          <Pressable
            key={tab.key}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
            onPress={() => onTabPress(tab.key)}
            style={({ pressed }) => [styles.tab, pressed && styles.tabPressed]}
          >
            <TabIcon name={tab.key} color={color} />
            <Text
              style={[styles.tabLabel, { color }, isActive && styles.activeLabel]}
            >
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function DashboardScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('explore');
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={styles.content}>
        <Text style={styles.heading}>
          {tabs.find(tab => tab.key === activeTab)?.label}
        </Text>
      </View>

      <BottomBar
        activeTab={activeTab}
        onTabPress={setActiveTab}
        style={{paddingBottom: Math.max(insets.bottom, 5)}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#222222',
    fontSize: 24,
    fontWeight: '600',
  },
  bottomBar: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderTopColor: '#DEDEDE',
    borderTopWidth: StyleSheet.hairlineWidth,
    paddingTop: 10,
    shadowColor: '#000000',
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
  tabPressed: {
    opacity: 0.55,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '400',
  },
  activeLabel: {
    fontWeight: '600',
  },
});
