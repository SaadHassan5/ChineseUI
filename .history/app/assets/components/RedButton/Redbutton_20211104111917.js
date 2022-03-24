import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt,trans})=>{
    return(
    <TouchableOpacity style={Styles.touch}>
        <Text style={{fontFamily:fontFamily.semi_bold,paddingVertical:HP(1.7),fontSize:16,textAlign:'center',color:palette.white}}>{txt}</Text>
    </TouchableOpacity>
    )
}
const Styles =StyleSheet.create({
    touch:{
        backgroundColor:trans?'transparent':palette.maalta,
        alignSelf:'center',
        borderRadius:WP(10),
        width:WP(76),
        borderWidth:trans?2:0,
        borderColor:palette.white
    }
})