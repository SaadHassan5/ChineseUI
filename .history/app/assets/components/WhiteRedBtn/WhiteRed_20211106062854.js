import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../config/colors';

export const WhiteRed =(props)=>{
    return(
        <View style={{}}>
            <TouchableOpacity style={{borderColor:palette.maalta,borderWidth:1}}>
                <Text>saad</Text>
            </TouchableOpacity>
        </View>
    )
}