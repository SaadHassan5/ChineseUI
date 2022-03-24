import * as React from 'react';
import { Image, Settings, Text, View } from 'react-native';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfirmCode from '../screens/ConfirmCode/confirmCode';
import { HP, WP } from '../assets/config/screen-ratio';
import Home from '../screens/Home/home';
import { SVGS } from '../assets/img';
import { palette } from '../assets/config/colors';
import { TryStack } from './tryStack';
import ContactUs from '../screens/Contact/contact';
import CouponBar from '../screens/Coupons/CouponBar';
import Mailbox from '../screens/Mailbox/mailbox';
import { MailStack } from './MailStack';
import fontFamily from '../assets/config/fontFamily';
const Tab = createBottomTabNavigator();

export function TabNavigator({ navigation }) {
  return (
    <Tab.Navigator
      labeled={false}
      // barStyle={{
      //   backgroundColor: '#4B4B4B',
      //   borderTopLeftRadius: 30,
      //   borderTopRightRadius: 30,
      //   borderWidth: 1,
      //   borderColor: '#707070',
      //   paddingLeft: 20, paddingRight: 20,
      //   height: HP(9),
      //   // padding: HP(1),
      //   // paddingBottom:HP(0)
      // }}

      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#4B4B4B',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          borderWidth: 1,
          borderColor: '#707070',
          paddingLeft: 20, paddingRight: 20,
          height: HP(9),
          position: 'absolute',
          bottom:0
          // padding: HP(1),
          // paddingBottom:HP(0)
          // ...Styles.shadow,
          // paddingVertical:HP(6)
        }
      }}

    >
      <Tab.Screen name="HomeStack" component={TryStack} initialParams={{ isMine: false }}
        options={{
          // tabBarLabel: true,
          title: '首頁',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: WP(20) }}>
              <SVGS.home />
              <Text style={{ color: 'white', fontSize: 12, paddingTop: WP(1) }}>首頁</Text>
            </View>
            //   <View style={{ backgroundColor: focused ? '#2fd3ca' : 'white',padding:WP(3),borderRadius:WP(9),marginBottom:WP(0) }}>
            //     {/* <TABSVGS.feedtab /> */}
            //     <LocationIcon fill={focused?palette.white:'#2fd3ca'} />
            //   </View>
          )
        }}
      />
      <Tab.Screen name="QR" component={CouponBar}
        options={{
          // title: '我的條碼',
          tabBarLabel: '我的條碼',

          // tabbar
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: WP(20) }}>
              <SVGS.qr />
              <Text style={{ color: 'white', fontSize: 12, paddingTop: WP(1) }}>我的條碼</Text>
            </View>
          )

        }}
      />
      <Tab.Screen name="Mail" component={MailStack}
        options={{
          title: '我的信箱',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: WP(20) }}>
              <View>
                <SVGS.msg />
                <View style={{ position: 'absolute', alignSelf: 'center', right: -WP(2), top: -HP(.5) }}>
                  <Text style={{ backgroundColor: '#FF0042', fontSize: 7, fontFamily: fontFamily.semi_bold, textAlign: 'center', borderRadius: WP(10), padding: WP(1), color: 'white' }}>10</Text>
                </View>
              </View>
              <Text style={{ color: 'white', fontSize: 12, paddingTop: WP(1) }}>我的信箱</Text>
            </View>
          )
        }}
      />

      <Tab.Screen name="Contact" component={ContactUs}
        options={{
          title: '聯繫客服',
          tabBarIcon: ({ color, size, focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', width: WP(20) }}>
              <SVGS.chat />
              <Text style={{ color: 'white', fontSize: 12, paddingTop: WP(1) }}>聯繫客服</Text>
            </View>
          )
        }}
      />

    </Tab.Navigator >
  );
}
