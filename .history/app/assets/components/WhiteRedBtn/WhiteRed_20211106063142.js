import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { WP } from '../../config/screen-ratio';

export const WhiteRed =({txt1,txt2,nav1,nav2})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderColor:palette.maalta,borderWidth:1,width:WP(20)}}>
                <Text style={{textAlign:'center',fontFamily:fontFamily.regular,fontSize:12}}>saad</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{borderColor:palette.maalta,borderWidth:1,width:WP(20),backgroundColor:palette.maalta}}>
                <Text style={{textAlign:'center',fontFamily:fontFamily.regular,fontSize:12}}>saad</Text>
            </TouchableOpacity>
        </View>
    )
}