import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { WP } from '../../assets/config/screen-ratio';

export const ConfirmStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.maalta,
        justifyContent:'center',
        alignItems:'center'
    },
    titleTxt:{
        color:palette.white,
        fontFamily:fontFamily.semi_bold,
        fontSize:22,
        lineHeight:32
    },
    secondTxt:{
        color:palette.white,
        fontFamily:fontFamily.regular,
        fontSize:14,
        lineHeight:24,
        paddingHorizontal:WP(20)
    }
})