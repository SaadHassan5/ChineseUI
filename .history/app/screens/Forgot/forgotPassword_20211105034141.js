import React from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const ForgotPassword =(props)=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack
            title={'NOT ONLY LUCK\nSKILL FIRST!'}
            lbl1={'手機號碼'}
            forgotTxt={'系統將重新發送驗證碼至您的手機'}
            forgot
            btn={'送出'}
            arrowNav={()=>props.navigation.goBack()}
            nav={()=>props.navigation.navigate('ConfirmCode')}
            />
        </View>
    )
}
export default ForgotPassword;