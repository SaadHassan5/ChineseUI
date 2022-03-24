import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt,trans,nav})=>{
    const Styles =StyleSheet.create({
        touch:{
            backgroundColor:trans?'transparent':palette.maalta,
            alignSelf:'center',
            borderRadius:WP(),
            width:WP(80),
            borderWidth:trans?2:0,
            borderColor:palette.white
        },
        txt:{
            fontFamily:fontFamily.semi_bold,
            paddingVertical:HP(1.9),
            fontSize:16,
            textAlign:'center',
            color:palette.white
        }
    })
    return(
    <TouchableOpacity onPress={nav} style={Styles.touch}>
        <Text style={Styles.txt}>{txt}</Text>
    </TouchableOpacity>
    )
    
}
