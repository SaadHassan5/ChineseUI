import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/home';
import Coupon from '../screens/Coupons/coupons';
import CouponBar from '../screens/Coupons/CouponBar';
const Stack = createStackNavigator();
export const TryStack = () => (
    <Stack.Navigator
    initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Coupon" component={Coupon} />
    <Stack.Screen name="CouponBar" component={CouponBar} />
  </Stack.Navigator>
)