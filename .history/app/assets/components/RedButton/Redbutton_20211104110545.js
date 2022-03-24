import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt})=>{
    return(
    <TouchableOpacity style={{backgroundColor:palette.maalta,alignSelf:'center',borderRadius:WP(10),width:WP(70)}}>
        <Text style={{fontFamily:fontFamily.semi_bold,paddingVertical:HP(1.7),fontSize:16}}>{txt}</Text>
    </TouchableOpacity>
    )
}