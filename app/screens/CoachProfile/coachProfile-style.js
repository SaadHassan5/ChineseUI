import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const CoachProfileStyles = StyleSheet.create({
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
        marginTop: HP(15),
        borderTopRightRadius: WP(10),
        borderTopLeftRadius: WP(10),
        paddingHorizontal: WP(8),
        paddingVertical: HP(0),
        // borderBottomWidth:0.15,
        borderColor: palette.lightestGrey,
        // alignItems:'center'
    },
    nameTxt:{
        fontFamily: fontFamily.medium, 
        fontSize: 15, 
        color: palette.black, 
        paddingLeft: WP(4)
    },
    
    statusTxt: {
        backgroundColor: '#FFC640',
        paddingHorizontal: WP(3),
        paddingVertical: HP(.5),
        borderRadius: WP(4),
        color: palette.white,
        fontSize: 10,
        fontFamily: fontFamily.regular
    },
    introTxt:{
        fontFamily:fontFamily.regular,
        fontSize:13,
        color:'#77838F',
        lineHeight:24,
        paddingRight:WP(8)
    }
})