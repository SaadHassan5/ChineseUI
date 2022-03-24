import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const AgreementStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:palette.maalta,
    },
    headerTxt:{
        color:palette.white,
        fontSize:25,
        fontFamily:fontFamily.medium,
        lineHeight:31,
        marginLeft:WP(5)
        },
        whiteView:{
            backgroundColor:palette.white,
            height:HP(80),
            marginTop:HP(10),
            borderTopRightRadius:WP(10),
            borderTopLeftRadius:WP(10),
            paddingHorizontal:WP(7)
        },
        titleTxt:{
            fontSize:15,
            fontFamily:fontFamily.semi_bold,
            lineHeight:31,
            color:'#272F4B'
        },
        txt:{
            fontSize:12,
            fontFamily:fontFamily.regular,
            lineHeight:26,
            color:'#616161'
        }
    })