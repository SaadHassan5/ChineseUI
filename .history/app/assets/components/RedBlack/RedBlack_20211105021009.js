import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';
import { HP, WP } from '../../config/screen-ratio';
import { RedButton } from '../RedButton/RedButton';


export const RedBlack =({title,lbl1,lbl2,opt1,opt2,btn,nav})=>{
    const Styles =StyleSheet.create({
        touchView:{
            backgroundColor:palette.black,
            width:WP(100),
            height:HP(20),
            bottom:0,
            position: 'absolute',
            justifyContent:'center',
            alignItems:'center',
        }
    })
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
                <Text>{title}</Text>
            <View style={Styles.touchView}>
                <RedButton txt={btn}/>
            </View>
        </View>
    )
}