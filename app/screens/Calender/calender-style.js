import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const CalenderStyles = StyleSheet.create({
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
            marginTop:HP(10),
            borderTopRightRadius:WP(10),
            borderTopLeftRadius:WP(10),
            // paddingHorizontal:WP(6),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey,
            // alignItems:'center'
        },
        touchAll:{
            paddingHorizontal:WP(4),
            borderRadius:WP(1.5),
            paddingVertical:HP(1)
        },
        allTxt:{
            fontSize:13,fontFamily:fontFamily.medium,lineHeight:17,color:'#707070'
        },
        matchView:{
            flexDirection:'row',
            alignItems:'center',
            paddingVertical:HP(2),
            borderColor:palette.lighBlueBtn,
            borderWidth:1,
            marginHorizontal:WP(2),
            paddingHorizontal:WP(4),
            marginTop:HP(2)
        },
        img:{
            width: WP(15),
            height:WP(15),
            borderRadius:WP(7.5)
        },
        inView:{
            paddingLeft:WP(5)
        },
        titleTxt:{
            fontSize:16,
            fontFamily:fontFamily.medium,
            lineHeight:21,
            color:palette.black
        },
        timeTxt:{
            fontSize:14,
            fontFamily:fontFamily.regular,
            lineHeight:20,
            color:'#707070'
        },
        dayTxt:{
            // textAlign:'center',
            fontFamily:fontFamily.regular,
            fontSize:12,
            lineHeight:17
        }
    })