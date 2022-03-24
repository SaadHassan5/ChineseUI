import React from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const ForgotPassword =()=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack
            title={'NOT ONLY LUCK\nSKILL FIRST!'}
            lbl1={'手機號碼'}
            lbl2={'請輸入密碼'}
            opt1={'記住我的登入資訊'}
            opt2={'忘記密碼?'}
            btn={'登入'}
            />
        </View>
    )
}
export default ForgotPassword;