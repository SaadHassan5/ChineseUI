import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const HomeStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.white,
    },
    dp: {
        width: WP(25),
        height: WP(25),
        borderRadius: WP(12.5),
        // marginHorizontal: WP(7),
        // marginVertical:HP(3)
    },
    vipView:{
        borderWidth:1,alignSelf:'center',padding:WP(1),borderRadius:WP(2),backgroundColor:palette.black,borderColor:palette.white,
    },
    lbl: {
        color: palette.white,
        textAlign: 'center',
        fontFamily: fontFamily.regular,
        fontSize: 12, paddingVertical: HP(.5)
    },
    gradeTxt: {
        width: WP(25),
        borderRadius: WP(3),
        paddingVertical: HP(.9),
        fontFamily: fontFamily.regular,
        fontSize: 14,
        backgroundColor: palette.white,
        textAlign: 'center',
        color: palette.maalta
    },
    nick: {
        fontFamily: fontFamily.regular,
        fontSize: 12,
        lineHeight: 25,
        color: palette.white,
        textAlign: 'center'
    },
    name: {
        fontFamily: fontFamily.semi_bold,
        fontSize: 24,
        lineHeight: 25,
        color: palette.white,
        textAlign: 'center'
    },
    optTxt: {
        fontFamily: fontFamily.regular,
        fontSize: 11,
        color: '#848484',
        paddingTop: HP(.5),
        textAlign: 'center'
    },
    isMineLbl: {
        fontFamily: fontFamily.semi_bold,
        fontSize: 16,
        lineHeight: 25,
        color: '#484848',
        paddingHorizontal: WP(5)
    }
})