import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { SVGS } from '../../img';

export const CustomHeader =({txt,props,nav})=>{
    const Styles =StyleSheet.create({  
    headerTxt: {
        color: palette.white,
        fontSize: 25,
        fontFamily: fontFamily.medium,
        lineHeight: 31,
        // marginLeft: WP(5)
    },
    })
    return(
        <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute',  }}>
        <TouchableOpacity onPress={() => props.navigation.goBack()} style={{padding:WP(9)}}>
            <SVGS.backArrow />
        </TouchableOpacity>
        <Text style={{ ...Styles.headerTxt }}>{txt}</Text>
    </View>
    )
    
}
