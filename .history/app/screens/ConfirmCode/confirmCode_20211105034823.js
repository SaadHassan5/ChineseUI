import React from 'react';
import { Text, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles} from './confirm-style';

const ConfirmCode =(props)=>{
    return(
        <View style={Styles.container}>
           <SVGS.mobile/>
           <Text style={Styles.titleTxt}>請輸入驗證碼</Text>
        </View>
    )
}
export default ConfirmCode;