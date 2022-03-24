import React from 'react';
import { StyleSheet } from 'react-native';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';

export const LectureStyles = StyleSheet.create({
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
        paddingHorizontal: WP(8),
        paddingVertical: HP(0),
        // borderBottomWidth:0.15,
        borderColor: palette.lightestGrey,
        // alignItems:'center'
    },
    cardView: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF', marginTop: HP(3),
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: palette.lighBlueBtn,
        width: WP(85),
        paddingVertical: HP(.5),
        paddingHorizontal: WP(3),
        borderRadius: WP(3)
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
    nameTxt:{
        fontFamily: fontFamily.medium, 
        fontSize: 15, 
        color: palette.black, 
        paddingLeft: WP(4)
    },
    titleTxt:{
        fontFamily:fontFamily.semi_bold,
        fontSize:16,
        color:palette.black
    },
    dateTxt:{
        fontFamily: fontFamily.regular, 
        fontSize: 12, 
        color: '#707070', 
        paddingLeft: WP(4)
    },
    calTxt:{
        color:'#000000',
        fontFamily:fontFamily.regular,
        lineHeight:17,
        fontSize:14
    },
    img:{
        width: WP(20), height: WP(20), borderRadius: WP(2.2)
    }
})