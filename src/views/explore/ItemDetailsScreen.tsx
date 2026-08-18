import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import AppRoutes from '../../core/constants/AppRoutes';
import type { ExploreStackParamList } from '../../navigation/ExploreStackNavigator';
import { colors } from '../../core/theme/colors';

type Props = NativeStackScreenProps<
  ExploreStackParamList,
  typeof AppRoutes.ITEM_DETAILS
>;

export default function ItemDetailsScreen({ route }: Props) {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Item Details</Text>
      <Text style={styles.description}>Item ID: {route.params.itemId}</Text>
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
    marginTop: 8,
  },
});
