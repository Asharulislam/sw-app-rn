import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppRoutes from '../../core/constants/AppRoutes';
import type { ExploreStackParamList } from '../../navigation/ExploreStackNavigator';
import { colors } from '../../core/theme/colors';

type Props = NativeStackScreenProps<
  ExploreStackParamList,
  typeof AppRoutes.EXPLORE
>;

export default function ExploreScreen({ navigation }: Props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Explore</Text>
      <Text style={styles.description}>Your item listings will appear here.</Text>

      <Pressable
        style={({ pressed }) => [styles.item, pressed && styles.pressed]}
        onPress={() =>
          navigation.navigate(AppRoutes.ITEM_DETAILS, { itemId: '1' })
        }
      >
        <Text style={styles.itemTitle}>Example item</Text>
        <Text style={styles.itemAction}>View details</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.screenBackground,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    color: colors.secondaryText,
    fontSize: 15,
    marginTop: 6,
    marginBottom: 24,
  },
  item: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 16,
  },
  pressed: {
    opacity: 0.65,
  },
  itemTitle: {
    color: colors.text,
    fontSize: 17,
    fontWeight: '600',
  },
  itemAction: {
    color: colors.primary,
    fontSize: 14,
    marginTop: 6,
  },
});
