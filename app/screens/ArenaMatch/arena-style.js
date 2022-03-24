import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const ArenaStyles = StyleSheet.create({
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
            paddingHorizontal:WP(8),
            paddingVertical:HP(0),
            // borderBottomWidth:0.15,
            borderColor:palette.lightestGrey,
            // alignItems:'center'
        },
        matchView:{
            flexDirection:'row',
            alignItems:'center',
            paddingTop:HP(2)
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
            color:'#272F4B'
        },
        timeTxt:{
            fontSize:14,
            fontFamily:fontFamily.regular,
            lineHeight:20,
            color:'#707070'
        }
    })