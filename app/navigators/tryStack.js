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
import Lecture from '../screens/Lecture/Lecture';
import CoachProfile from '../screens/CoachProfile/coachProfile';
import HelpCenter from '../screens/Help/HelpCenter';
import PointRecord from '../screens/PointRecord/PointRecord';
import ArenaMatch from '../screens/ArenaMatch/ArenaMatch';
import Calender from '../screens/Calender/Calender';
import BookCoach from '../screens/BookCoach/BookCoach';
import PokerHeros from '../screens/PokerHeros/PokerHeros';
import Membership from '../screens/Membership/membership';
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
    <Stack.Screen name="Lecture" component={Lecture} />
    <Stack.Screen name="CoachProfile" component={CoachProfile} />
    <Stack.Screen name="HelpCenter" component={HelpCenter} />
    <Stack.Screen name="PointRecord" component={PointRecord} />
    <Stack.Screen name="ArenaMatch" component={ArenaMatch} />
    <Stack.Screen name="Calender" component={Calender} />
    <Stack.Screen name="BookCoach" component={BookCoach} />
    <Stack.Screen name="Membership" component={Membership} />
    {/* <Stack.Screen name="PokerHeros" component={PokerHeros} /> */}
  </Stack.Navigator>
)