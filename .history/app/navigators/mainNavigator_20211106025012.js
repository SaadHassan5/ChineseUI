import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/register';
import ForgotPassword from '../screens/Forgot/forgotPassword';
import ConfirmCode from '../screens/ConfirmCode/confirmCode';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import NewMember from '../screens/RegisterNewMember/NewMember';
import UserAgreement from '../screens/UserAgreement/UserAgreement';
const Stack = createStackNavigator();
export const MainNavigator = () => (
  <Stack.Navigator
    initialRouteName="UserAgreement" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="ConfirmCode" component={ConfirmCode} />
    <Stack.Screen name="ResetPassword" component={ResetPassword} />
    <Stack.Screen name="NewMember" component={NewMember} />
    <Stack.Screen name="UserAgreement" component={UserAgreement} />
  </Stack.Navigator>
)