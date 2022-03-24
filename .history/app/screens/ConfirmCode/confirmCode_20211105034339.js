import React from 'react';
import { View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { SVGS } from '../../assets/img';

const ConfirmCode =(props)=>{
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
           <SVGS.mobile/>
        </View>
    )
}
export default ConfirmCode;