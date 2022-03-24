import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt,trans})=>{
    return(
    <TouchableOpacity style={{}}>
        <Text style={{fontFamily:fontFamily.semi_bold,paddingVertical:HP(1.7),fontSize:16,textAlign:'center',color:palette.white}}>{txt}</Text>
    </TouchableOpacity>
    )
}
const Styles =StyleSheet.create({
    touch:{

    }
})