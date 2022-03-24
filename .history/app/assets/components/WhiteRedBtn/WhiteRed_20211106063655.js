import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';

export const WhiteRed =({txt1,txt2,nav1,nav2})=>{
    return(
        <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderColor:palette.maalta,borderRadius:WP(1.5),borderWidth:1,width:WP(20)}}>
                <Text style={{textAlign:'center',fontFamily:fontFamily.regular,fontSize:12,lineHeight:14,paddingVertical:HP(.5),color:palette.maalta}}>{txt1}</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={{marginLeft:WP(3),borderRadius:WP(1),borderColor:palette.maalta,borderWidth:1,width:WP(20),backgroundColor:palette.maalta}}>
                <Text style={{textAlign:'center',fontFamily:fontFamily.regular,fontSize:12,color:palette.white,lineHeight:14,paddingVertical:HP(.5)}}>{txt2}</Text>
            </TouchableOpacity>
        </View>
    )
}