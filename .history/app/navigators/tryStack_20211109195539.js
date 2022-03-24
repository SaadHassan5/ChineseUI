import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/home';
import Coupon from '../screens/Coupons/coupons';
import CouponBar from '../screens/Coupons/CouponBar';
import Coaching from '../screens/Coaching/coaching';
import News from '../screens/News/news';
import DetailNews from '../screens/News/detailNews';
import About from '../screens/About/about';
import Appointment from '../screens/Appointment/appointment';
import SystemPush from '../screens/System/SystemPush';
import AccountSetting from '../screens/AccountSetting/AcountSetting';
import MailContent from '../screens/Mailbox/mailContent';
const Stack = createStackNavigator();
export const TryStack = () => (
    <Stack.Navigator
    initialRouteName="Home" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home"  component={Home} />
    <Stack.Screen name="Coaching" component={Coaching} />
    <Stack.Screen name="Coupon" component={Coupon} />
    <Stack.Screen name="CouponBar" component={CouponBar} />
    <Stack.Screen name="News" component={News} />
    <Stack.Screen name="DetailNews" component={DetailNews} />
    <Stack.Screen name="About" component={About} />
    <Stack.Screen name="Appointment" component={Appointment} />
    <Stack.Screen name="SystemPush" component={SystemPush} />
    <Stack.Screen name="AccountSetting" component={AccountSetting} />
    <Stack.Screen name="MailContent" component={MailContent} />
  </Stack.Navigator>
)