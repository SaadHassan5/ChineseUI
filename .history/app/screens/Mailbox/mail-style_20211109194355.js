import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const MailStyles = StyleSheet.create({
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
            flex:1,
            marginTop:HP(11),
            // borderTopRightRadius:WP(10),
            // borderTopLeftRadius:WP(10),
            // paddingHorizontal:WP(5),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey
        },
        img:{width: WP(14), height: WP(14), borderRadius: WP(7)},
        titleTxt:{
            fontFamily: fontFamily.semi_bold, fontSize: 16, lineHeight: 24, color: '#272F4B'
        },
        dateTxt:{
            fontFamily: fontFamily.light, fontSize: 14, lineHeight: 20
        }
    })