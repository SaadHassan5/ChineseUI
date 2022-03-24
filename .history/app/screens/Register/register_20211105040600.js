import React from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const Register =(props)=>{
    return(
        <View style={{flex:1,}}>
            <RedBlack
            title={'LETS PLAY \n POKER !'}
            lbl1={'請輸入手機號碼'}
            lbl2={'請輸入密碼'}
            opt1={'記住我的登入資訊'}
            opt2={'忘記密碼?'}
            btn={'登入'}
            arrowNav={()=>props.navigation.goBack()}
            nav={()=>props.navigation.navigate('ForgotPassword')}
            />
        </View>
    )
}
export default Register;