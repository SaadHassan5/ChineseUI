import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const ContactStyles = StyleSheet.create({
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
            backgroundColor:palette.black,
            flex:1,
            marginTop:HP(10),
            borderTopRightRadius:WP(10),
            borderTopLeftRadius:WP(10),
            paddingHorizontal:WP(8),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey,
            alignItems:'center'
        },
        welTxt:{
            fontFamily:fontFamily.regular,
            fontSize:16,
            color:palette.black,
            paddingTop:HP(3)
        },
        supTxt:{
            fontSize:13,
            fontFamily:fontFamily.medium,
            lineHeight:24,
            color:'#666666',
            paddingVertical:HP(2),
            textAlign:'center'
        }
    })