import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';
import { HP, WP } from '../../config/screen-ratio';


export const RedBlack =({title,lbl1,lbl2,opt1,opt2,btn,nav})=>{
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
            <View style={{backgroundColor:palette.letterRed,width:WP(100),height:HP(10),bottom:0,position: 'absolute',}}>
                <Text>saad</Text>
            </View>
        </View>
    )
}