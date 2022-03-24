import React from 'react';
import { Text, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles } from './confirm-style';

const ConfirmCode = (props) => {
    return (
        <View style={Styles.container}>
            <SVGS.mobile />
            <Text style={Styles.titleTxt}>請輸入驗證碼</Text>
            <Text style={Styles.titleTxt}>我們已將驗證碼傳送至您的手機請輸入驗證碼以繼續</Text>
        </View>
    )
}
export default ConfirmCode;