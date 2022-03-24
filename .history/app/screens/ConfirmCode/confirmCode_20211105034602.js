import React from 'react';
import { View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles} from './confirm-style';

const ConfirmCode =(props)=>{
    return(
        <View style={Styles.container}>
           <SVGS.mobile/>
        </View>
    )
}
export default ConfirmCode;