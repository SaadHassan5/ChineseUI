import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';

export const LoginStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.white
    },
    txt:{
        fontFamily:fontFamily.semi_bold,
        fontSize:16,
        textAlign:'center',
        color:palette.white
    }
})