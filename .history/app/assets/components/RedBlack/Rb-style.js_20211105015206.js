import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';

export const RBStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.white
    },
    txt:{
        fontFamily:fontFamily.medium,
        fontSize:13,
        textAlign:'center',
        color:palette.white
    }
})