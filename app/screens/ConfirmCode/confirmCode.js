import React, { useState } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { Otp_input } from '../../assets/components/OTP/otp-input';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { ConfirmStyle as Styles } from './confirm-style';

const ConfirmCode = (props) => {
    const [isVerify, setIsVerify] = useState(false)
    const Code = async () => {
        setIsVerify(true)
        // props.navigation.navigate('ResetPassword')

    }
    return (
        <View style={Styles.container}>
            {/* <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: WP(8), top: HP(4) }}>
                <SVGS.backArrow />
            </TouchableOpacity> */}
            <CustomHeader txt={''} props={props} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
                    <TouchableOpacity onPress={() => Code()} style={{ backgroundColor: palette.maalta, borderRadius: WP(3), marginTop: HP(2) }}>
                        <Text style={{ fontSize: 14, fontFamily: fontFamily.semi_bold, color: palette.white, textAlign: 'center', paddingVertical: HP(1.5) }}>驗證</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <VerifyModal txt1={'驗證成功'} txt2={'請重設密碼'} nav={() => { setIsVerify(false); props.navigation.navigate('ResetPassword') }} isVerify={isVerify} setIsVerify={setIsVerify} />
        </View>
    )
}
export default ConfirmCode;