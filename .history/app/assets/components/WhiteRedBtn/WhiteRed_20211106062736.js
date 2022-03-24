import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { palette } from '../../config/colors';

export const WhiteRed =(props)=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <TouchableOpacity>
                <Text>saad</Text>
            </TouchableOpacity>
        </View>
    )
}