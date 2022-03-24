import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const RedLable =({txt})=>{
    const Styles =StyleSheet.create({
        red:{
            borderWidth:1,
            alignSelf:'flex-start',
            paddingHorizontal:WP(4),
            fontSize:10,
            fontFamily:fontFamily.regular,
            lineHeight:14,
            borderColor:palette.maalta,
            color:palette.maalta,
            paddingVertical:WP(.5)
        }
    })
    return(
        <Text style={{...Styles.red}}>{txt}</Text>
    )
    
}
