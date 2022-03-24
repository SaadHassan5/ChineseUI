import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export const RedButton =({txt})=>{
    return(
    <TouchableOpacity>
        <Text>{txt}</Text>
    </TouchableOpacity>
    )
}