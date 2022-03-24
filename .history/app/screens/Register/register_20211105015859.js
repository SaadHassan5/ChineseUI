import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const Register =()=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack
            title={`LETS PLAY{'\n'}POKER`}
            lbl1={'請輸入手機號碼'}
            lbl2={'請輸入密碼'}
            />
        </View>
    )
}
export default Register;