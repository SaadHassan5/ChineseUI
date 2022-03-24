import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MailContent from '../screens/Mailbox/mailContent';
import Mailbox from '../screens/Mailbox/mailbox';
const Stack = createStackNavigator();
export const MailStack = () => (
    <Stack.Navigator
    initialRouteName="Mailbox" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Mailbox" component={Mailbox} />
    <Stack.Screen name="MailContent" component={MailContent} />
  </Stack.Navigator>
)