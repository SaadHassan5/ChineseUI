import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { SVGS } from '../../img';
import { RedButton } from '../RedButton/RedButton';


export const RedBlack = ({ title, lbl1, lbl2, opt1, opt2, btn, nav }) => {
    const [eye,setEye] = useState(true)
    const Styles = StyleSheet.create({
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
        }
    })
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta, paddingHorizontal: WP(8) }}>
            <TouchableOpacity style={{ position: 'absolute', left: WP(8), top: HP(4) }}>
                <SVGS.backArrow />
            </TouchableOpacity>
            <Text style={Styles.titleTxt}>{title}</Text>
            <Text style={Styles.lblTxt}>{lbl1}</Text>
            <TextInput style={Styles.mblInp} placeholderTextColor={palette.white} placeholder={'Enter Mobile No'} />
            <Text style={{ ...Styles.lblTxt, paddingTop: HP(5) }}>{lbl2}</Text>
            <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
                <TextInput textContentType={'password'} secureTextEntry={eye} style={{ ...Styles.mblInp,width: '100%',}} placeholderTextColor={palette.white} placeholder={'Enter Password'} />
                <TouchableOpacity onPress={()=>setEye(!eye)} style={{position: 'absolute',right:WP(5)}}>
                    <SVGS.eye/>
                </TouchableOpacity>
            </View>
            <View style={Styles.touchView}>
                <RedButton txt={btn} />
            </View>
        </View>
    )
}