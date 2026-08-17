import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppRoutes from '../core/constants/AppRoutes';
import ExploreScreen from '../views/explore/ExploreScreen';
import ItemDetailsScreen from '../views/explore/ItemDetailsScreen';

export type ExploreStackParamList = {
  [AppRoutes.EXPLORE]: undefined;
  [AppRoutes.ITEM_DETAILS]: { itemId: string };
};

const Stack = createNativeStackNavigator<ExploreStackParamList>();

export default function ExploreStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={AppRoutes.EXPLORE}
        component={ExploreScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={AppRoutes.ITEM_DETAILS}
        component={ItemDetailsScreen}
        options={{ title: 'Item Details' }}
      />
    </Stack.Navigator>
  );
}
