import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';


export const RedBlack =({title,lbl1,lbl2,opt1,opt2,btn,nav})=>{
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
            <View style={{backgroundColor:palette.letterRed,flex:0.2,bottom:0}}>
                <Text>saad</Text>
            </View>
        </View>
    )
}