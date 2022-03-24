import * as React from 'react';
import { Image, Settings, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ConfirmCode from '../screens/ConfirmCode/confirmCode';
import { HP,WP } from '../assets/config/screen-ratio';
import Home from '../screens/Home/home';
import { SVGS } from '../assets/img';
import { palette } from '../assets/config/colors';
import { TryStack } from './tryStack';
import ContactUs from '../screens/Contact/contact';
import CouponBar from '../screens/Coupons/CouponBar';
import Mailbox from '../screens/Mailbox/mailbox';
const Tab = createMaterialBottomTabNavigator();

export function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
    labeled={true}
      barStyle={{
        backgroundColor: '#4B4B4B', 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
         borderWidth: 1,
         borderColor: '#707070',
        paddingLeft: 20, paddingRight: 20, 
        height: HP(8), 
        // padding: HP(1),
        // paddingBottom:HP(0)
      }}>
      <Tab.Screen name="Home" component={TryStack} initialParams={{isMine:false}}
        options={{
          // tabBarLabel: true,
          title:'首頁',
          tabBarIcon: ({ color, size, focused }) => (
            <SVGS.home/>
          //   <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9),marginBottom:WP(0) }}>
          //     {/* <TABSVGS.feedtab /> */}
          //     <LocationIcon fill={focused?palette.white:'#2fd3ca'} />
          //   </View>
          )
        }}
      />
      <Tab.Screen name="QR" component={CouponBar}
        options={{
          title:'我的條碼',
          tabBarIcon: ({ color, size, focused }) => (
            <SVGS.qr/>
          )
        }}
      />
      <Tab.Screen name="Mailbox" component={Mailbox}
        options={{
          title:'我的信箱',
          tabBarIcon: ({ color, size, focused }) => (
            <SVGS.msg/>
          )
        }}
      />
      
      <Tab.Screen name="Contact" component={ContactUs}
        options={{
          title:'聯繫客服',
          tabBarIcon: ({ color, size, focused }) => (
            <SVGS.chat/>
          )
        }}
      />
     
    </Tab.Navigator>
  );
}
