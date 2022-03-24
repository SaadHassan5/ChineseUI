import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const PointStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.maalta,
    },
    headerTxt: {
        color: palette.white,
        fontSize: 25,
        fontFamily: fontFamily.medium,
        lineHeight: 31,
        marginLeft: WP(5)
    },
    whiteView: {
        backgroundColor: palette.white,
        flex: 1,
        marginTop: HP(10),
        borderTopRightRadius: WP(10),
        borderTopLeftRadius: WP(10),
        paddingHorizontal: WP(10),
        paddingVertical: HP(0),
        // borderBottomWidth:0.15,
        borderColor: palette.lightestGrey,
        // alignItems:'center'
    },
    num:{
        fontSize:24,
        fontFamily:fontFamily.semi_bold,
        lineHeight:25,
        color:palette.maalta
    },
    scoreTxt:{
        fontSize:14,
        fontFamily:fontFamily.regular,
        lineHeight:24,
        color:palette.maalta
    },
    whiteLbl:{
        borderRadius:WP(1),
        borderWidth:1,
        width:WP(30)
    },
    lblTxt:{
        textAlign:'center',
        fontFamily:fontFamily.regular,
        fontSize:12,
        lineHeight:14,
        paddingVertical:HP(.5),
    },
    titleTxt:{
        fontSize:14,
        fontFamily:fontFamily.medium,
        color:'#2E3033',
        lineHeight:14
    },
    pointTxt:{
        fontSize:12,
        fontFamily:fontFamily.regular,
        lineHeight:14
    },
    tabletView:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:HP(2)
    },
    img:{
        width:WP(20),
        height:WP(20)
    },
    titTxt:{
        fontFamily:fontFamily.semi_bold,
        fontSize:16,
        lineHeight:24,
        color:'#272F4B'
    },
    priceTxt:{
        fontSize:12,
        fontFamily:fontFamily.regular,
        lineHeight:16,
        color:'#707070',
        paddingTop:HP(1)
    }
})