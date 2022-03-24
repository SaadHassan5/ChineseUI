import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const BookStyles = StyleSheet.create({
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
            marginTop:HP(19),
            borderTopRightRadius:WP(10),
            borderTopLeftRadius:WP(10),
            // paddingHorizontal:WP(8),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey,
            // alignItems:'center'
        },
        img:{
            width:WP(24),
            height:WP(24),
            marginTop:-HP(6),
            borderRadius:WP(2.5)
        },
        nameTxt:{
            fontFamily:fontFamily.medium,
            fontSize:14.5,
            lineHeight:29,
            color:'#393939',
            textAlign:'center'
        },
        britishTxt:{
            fontFamily:fontFamily.regular,
            fontSize:13,
            lineHeight:24,
            color:'#77838F',
            paddingHorizontal:WP(8),
            // textAlign:'center'  
        },
        datTxt:{
            fontSize:17,
            fontFamily:fontFamily.regular,
            color:'#28388F',
            lineHeight:24,
            paddingTop:HP(1),
            paddingHorizontal:WP(8),
        },
        touchDay:{
            borderWidth:1,
            borderColor:palette.lighBlueBtn,
            paddingVertical:HP(1.6),
            paddingHorizontal:WP(5),
            marginRight:WP(5),
            borderRadius:WP(4)
        },
        dayTxt:{
            fontSize:18,
            lineHeight:26,
            fontFamily:fontFamily.medium,
            color:palette.black,
            textAlign:'center'
        },
        numTxt:{
            fontSize:14,
            lineHeight:20,
            fontFamily:fontFamily.regular,
            textAlign:'center',
            paddingTop:HP(1)
        }
    })