import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const HomeStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.white,
    },
    dp:{
        width: WP(30),
        height:WP(30),
        borderRadius:WP(15),
        marginHorizontal:WP(7),
        // marginVertical:HP(3)
    },
    lbl:{
        color:palette.white,
        textAlign:'center',
        fontFamily:fontFamily.regular,
        fontSize:12,paddingVertical:HP(.5)
    },
    gradeTxt:{
        width:WP(20),
        borderRadius:WP(3),
        paddingVertical:HP(.7),
        backgroundColor: palette.white,
        textAlign:'center',
        color:palette.maalta
    }
    })