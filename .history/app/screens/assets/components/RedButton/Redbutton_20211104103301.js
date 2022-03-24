import React from 'react';
import {TouchableOpacity} from 'react-native'

export const RedButton =({txt,nav})=>{
    return(
        <TouchableOpacity>
            <Text>{txt}</Text>
        </TouchableOpacity>
    )
}