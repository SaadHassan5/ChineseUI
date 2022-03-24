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
            forgotTxt={'請輸入密碼'}
            />
        </View>
    )
}
export default ForgotPassword;