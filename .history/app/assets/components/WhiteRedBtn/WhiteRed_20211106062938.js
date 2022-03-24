import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../config/colors';
import { WP } from '../../config/screen-ratio';

export const WhiteRed =(props)=>{
    return(
        <View style={{}}>
            <TouchableOpacity style={{borderColor:palette.maalta,borderWidth:1,width:WP(30)}}>
                <Text style={{textAlign:'center'}}>saad</Text>
            </TouchableOpacity>
        </View>
    )
}