import React from 'react';
import { Text, View, } from 'react-native';
import { Otp_input } from '../../assets/components/OTP/otp-input';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles } from './confirm-style';

const ConfirmCode = (props) => {
    return (
        <View style={Styles.container}>
            <SVGS.mobile />
            <Text style={Styles.titleTxt}>請輸入驗證碼</Text>
            <Text style={Styles.secondTxt}>我們已將驗證碼傳送至您的手機請輸入驗證碼以繼續</Text>
            <View style={{...Styles.otpView}}>
                <Text style={{...Styles.otpTxt}}>驗證碼</Text>
                <Otp_input />
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Text>重新傳送驗證碼</Text>
                </View>
            </View>
        </View>
    )
}
export default ConfirmCode;