import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const NewStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.maalta,
    },
    headerTxt:{
        color:palette.white,
        fontSize:27,
        fontFamily:fontFamily.medium,
        lineHeight:31
    }
})