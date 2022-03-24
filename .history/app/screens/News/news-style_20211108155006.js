import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const NewsStyle = StyleSheet.create({
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
            backgroundColor:'#FFFAFA',
            flex:1,
            marginTop:HP(10),
            borderTopRightRadius:WP(10),
            borderTopLeftRadius:WP(10),
            // paddingHorizontal:WP(14),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey
        },
        titleTxt:{
            fontFamily:fontFamily.semi_bold,
            fontSize:14,
            lineHeight:18,
            color:palette.black
        },
        dateTxt:{
            fontFamily:fontFamily.regular,
            fontSize:11
        },
        detailTxt:{
            fontSize:10,
            fontFamily:fontFamily.regular
        }
    })