import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const ShipStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.white,
    },
    daysTxt:{
        fontSize:120,
        fontFamily:fontFamily.bold,
        color:palette.white,
        textAlign:'center',
        lineHeight:163,
    },
    fieldTxt:{
        fontSize:16,
        fontFamily:fontFamily.regular,
        color:palette.white,
        textAlign:'center',
        lineHeight:22,
    },
    joinView:{
        borderBottomWidth:2,
        borderColor:'#B8B8B8',
        paddingVertical:HP(2)
    },
    joinTxt:{
        fontSize:16,
        fontFamily:fontFamily.semi_bold,
        color:palette.white,
        paddingLeft:WP(15),
        lineHeight:22,
    },
})