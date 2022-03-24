import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { Otp_input } from '../../assets/components/OTP/otp-input';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles } from './confirm-style';

const ConfirmCode = (props) => {
    return (
        <View style={Styles.container}>
            <TouchableOpacity style={{position: 'absolute',left:WP(8),top:HP(4)}}>
                <SVGS.backArrow />
            </TouchableOpacity>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <SVGS.mobile />
            <Text style={Styles.titleTxt}>請輸入驗證碼</Text>
            <Text style={Styles.secondTxt}>我們已將驗證碼傳送至您的手機請輸入驗證碼以繼續</Text>
            <View style={{ ...Styles.otpView }}>
                <Text style={{ ...Styles.otpTxt }}>驗證碼</Text>
                <Otp_input />
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingTop: HP(1) }}>
                    <Text style={{ ...Styles.afterOtp }}>重新傳送驗證碼</Text>
                    <Text style={{ ...Styles.afterOtp }}>剩餘時間 </Text>
                </View>
                <TouchableOpacity style={{ backgroundColor: palette.maalta, borderRadius: WP(3), marginTop: HP(2) }}>
                    <Text style={{ fontSize: 14, fontFamily: fontFamily.semi_bold, color: palette.white, textAlign: 'center', paddingVertical: HP(1.5) }}>驗證</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>
    )
}
export default ConfirmCode;