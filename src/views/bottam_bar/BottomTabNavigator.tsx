import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomBar from '../../core/utils/components/BottomBar';
import AppRoutes from '../../core/constants/AppRoutes';
import LoginScreen from '../login/LoginScreen';
import PostItemScreen from '../post_item/PostItemScreen';
import ExploreStackNavigator from '../../navigation/ExploreStackNavigator';

export type BottomTabParamList = {
  [AppRoutes.EXPLORE_TAB]: undefined;
  [AppRoutes.POST_ITEM_TAB]: undefined;
  [AppRoutes.LOGIN_TAB]: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={AppRoutes.EXPLORE_TAB}
      tabBar={BottomBar}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name={AppRoutes.EXPLORE_TAB}
        component={ExploreStackNavigator}
      />
      <Tab.Screen
        name={AppRoutes.POST_ITEM_TAB}
        component={PostItemScreen}
      />
      <Tab.Screen name={AppRoutes.LOGIN_TAB} component={LoginScreen} />
    </Tab.Navigator>
  );
}
