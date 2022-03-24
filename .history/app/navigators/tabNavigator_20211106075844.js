import * as React from 'react';
import { Image, Settings, Text, View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ConfirmCode from '../screens/ConfirmCode/confirmCode';
import { HP,WP } from '../assets/config/screen-ratio';
import Home from '../screens/Home/home';
import { SVGS } from '../assets/img';
import { palette } from '../assets/config/colors';
const Tab = createMaterialBottomTabNavigator();

export function TabNavigator({ navigation }) {
  return (
    // <Tab.Navigator
    //   barStyle={{ marginHorizontal:WP(1),backgroundColor: '#ffff',height:HP(7),borderTopWidth:0,borderTopLeftRadius:WP(10),borderTopRightRadius:WP(10)}}
    //   tabBarLabel={false}
    //   initialRouteName="HOME"
    //   screenOptions={({ route }) => ({
    //     headerShown: false,
    //     // tabBarActiveTintColor:palette.lightGrey,
    //     // tabBarInactiveTintColor:palette.black,
    //     // tabBarLabel: route.name === 'Home' ? 'Home' :route.name === 'Tools':,
    //     tabBarIcon: ({ focused, color, size }) => {
    //       let icon = <User fill={focused?palette.primary:palette.tab_fill}/>;
    //       let iconName, tint;
    //       if (route.name === 'Discover') {
    //         icon = <Map fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'LikeProfile') {
    //         icon = <Like fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'Offers') {
    //         icon = <Offer fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       } else if (route.name === 'Chats') {
    //         icon = <Chat fill={focused?palette.primary:palette.tab_fill}/>;
    //         tint = palette.primary;
    //       }
    //       return (
    //         icon
    //       );
    //     },
    //   })}
    // >


    <Tab.Navigator
    labeled={false}
      barStyle={{
        backgroundColor: '#4B4B4B', 
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
         borderWidth: 1,
         borderColor: '#707070',
        paddingLeft: 20, paddingRight: 20, 
        height: HP(9), 
        // padding: HP(1),
        // paddingBottom:HP(0)
      }}>
      <Tab.Screen name="Home" component={Home}
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
      <Tab.Screen name="QR" component={Home}
        options={{
          title:'我的條碼',
          tabBarIcon: ({ color, size, focused }) => (
           <View style={{width:WP(40)}}>
            <SVGS.qr/>
            <Text style={{color:palette.white}}>我的條碼</Text>
            </View>
          )
        }}
      />
      <Tab.Screen name="Msg" component={Home}
        options={{
          title:'我的信箱',
          tabBarIcon: ({ color, size, focused }) => (
            <SVGS.msg/>
          )
        }}
      />
      
      <Tab.Screen name="Chat" component={Home}
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
