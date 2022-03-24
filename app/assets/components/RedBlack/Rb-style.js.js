import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RBStyle = StyleSheet.create({
    touchView: {
        backgroundColor: palette.black,
        width: WP(100),
        height: HP(20),
        bottom: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTxt: {
        color: palette.white,
        fontFamily: fontFamily.boldItalic,
        fontSize: 40,
        textAlign: 'center',
        marginTop: HP(8)
    },
    lblTxt: {
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: palette.white,
        paddingTop: HP(8)
    },
    mblInp: {
        color: palette.white,
        borderBottomWidth: 1,
        borderColor: palette.white,
        fontSize: 12,
        fontFamily: fontFamily.light
    },
    optTxt: {
        color: palette.white,
        fontSize: 12,
        fontFamily: fontFamily.regular
    }
})