import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt})=>{
    return(
    <TouchableOpacity style={{width:WP(75),height:HP(10)}}>
        <Text style={{fontFamily:fontFamily.semi_bold}}>{txt}</Text>
    </TouchableOpacity>
    )
}