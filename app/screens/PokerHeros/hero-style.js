import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const HeroStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: palette.black,
    },
    headerTxt: {
        color: palette.white,
        fontSize: 25,
        fontFamily: fontFamily.medium,
        lineHeight: 31,
        marginLeft: WP(5)
    },
    blackView: {
        backgroundColor: palette.black,
        // flex: 1,
        // marginTop: HP(10),
        alignItems:'center',
        // borderTopRightRadius: WP(10),
        // borderTopLeftRadius: WP(10),
        // paddingHorizontal: WP(10),
        // paddingVertical: HP(0),
        // borderBottomWidth:0.15,
        borderColor: palette.lightestGrey,
        // alignItems:'center'
    },
})