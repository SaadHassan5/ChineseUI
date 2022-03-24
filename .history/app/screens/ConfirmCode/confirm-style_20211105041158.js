import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

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
        paddingHorizontal:WP(23),
        textAlign:'center'
    },
    otpView:{
        paddingHorizontal:WP(5),paddingVertical:HP(3),backgroundColor:'white',borderTopRightRadius:WP(4),borderBottomLeftRadius:WP(3),borderBottomRightRadius:WP(3)
    },
    otpTxt:{
        
    }
})