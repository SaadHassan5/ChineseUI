import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';
import { HP, WP } from '../../config/screen-ratio';


export const RedBlack =({title,lbl1,lbl2,opt1,opt2,btn,nav})=>{
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
            <View style={{backgroundColor:palette.black,width:WP(100),height:HP(20),bottom:0,position: 'absolute',}}>
                <Text style={{color:'white'}}>saad</Text>
            </View>
        </View>
    )
}