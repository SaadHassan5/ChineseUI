import React from 'react';
import { View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const ResetPassword =(props)=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack
            title={'請輸入新密碼'}
            lbl1={'請輸入密碼'}
            lbl2={'請再次確認密碼'}
            btn={'送出'}
            arrowNav={()=>props.navigation.goBack()}
            nav={()=>props.navigation.navigate('NewMember')}
            reset
            />
        </View>
    )
}
export default ResetPassword;