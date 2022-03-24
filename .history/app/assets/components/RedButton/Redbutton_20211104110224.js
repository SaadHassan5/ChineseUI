import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedButton =({txt})=>{
    return(
    <TouchableOpacity style={{backgroundColor:palette.maalta}}>
        <Text style={{fontFamily:fontFamily.semi_bold}}>{txt}</Text>
    </TouchableOpacity>
    )
}