import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { SVGS } from '../../img';
import { RedButton } from '../RedButton/RedButton';


export const RedBlack =({title,lbl1,lbl2,opt1,opt2,btn,nav})=>{
    const Styles =StyleSheet.create({
        touchView:{
            backgroundColor:palette.black,
            width:WP(100),
            height:HP(20),
            bottom:0,
            position: 'absolute',
            justifyContent:'center',
            alignItems:'center',
        },
        titleTxt:{
            color:palette.white,
            fontFamily:fontFamily.boldItalic,
            fontSize:40,
            textAlign:'center',
            marginTop:HP(8)
        }
    })
    return(
        <View style={{flex:1,backgroundColor:palette.maalta,paddingHorizontal:WP(5)}}>
            <TouchableOpacity style={{position: 'absolute',left:WP(5),top:HP(4)}}>
                <SVGS.backArrow/>
            </TouchableOpacity>
                <Text style={Styles.titleTxt}>{title}</Text>
            <View style={Styles.touchView}>
                <RedButton txt={btn}/>
            </View>
        </View>
    )
}