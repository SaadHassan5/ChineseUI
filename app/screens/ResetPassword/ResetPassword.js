import React, { useState } from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';

const ResetPassword = (props) => {
    const [isVerify, setIsVerify] = useState(false);
    return (
        <View style={{ flex: 1, backgroundColor: palette.white }}>
            <RedBlack
                title={'請輸入新密碼'}
                lbl1={'請輸入密碼'}
                lbl2={'請再次確認密碼'}
                btn={'送出'}
                arrowNav={() => props.navigation.goBack()}
                nav={() => setIsVerify(true)}
                reset
            />
            <VerifyModal txt1={'密碼重置成功 !'} txt2={`感謝您的申請
現在可立即使用新密碼連線`} isVerify={isVerify} btn navBtn={() => { setIsVerify(false); props.navigation.navigate('Register'); }} />
        </View>
    )
}
export default ResetPassword;