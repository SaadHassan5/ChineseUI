import React, { useState } from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';

const ForgotPassword =(props)=>{
    const [isVerify, setIsVerify] = useState(false);
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack
            title={'NOT ONLY LUCK\nSKILL FIRST!'}
            lbl1={'手機號碼'}
            forgotTxt={'系統將重新發送驗證碼至您的手機'}
            forgot
            btn={'送出'}
            arrowNav={()=>props.navigation.goBack()}
            nav={()=>{setIsVerify(true)}}
            />
            <VerifyModal txt1={'發送成功'} txt2={`請查看您的手機訊息`} isVerify={isVerify} setIsVerify={setIsVerify} nav={()=>{setIsVerify(false);props.navigation.navigate("ConfirmCode")}} />
        </View>

    )
}
export default ForgotPassword;