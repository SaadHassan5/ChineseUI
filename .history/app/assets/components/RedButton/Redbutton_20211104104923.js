import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import fontFamily from '../../config/fontFamily';

export const RedButton =({txt})=>{
    return(
    <TouchableOpacity>
        <Text style={{fontFamily:fontFamily.semi_bold}}>{txt}</Text>
    </TouchableOpacity>
    )
}