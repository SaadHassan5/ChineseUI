import React from 'react';
import { ImageBackground, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES } from '../../assets/img';
import { LoginStyle as Styles } from './login-style';

const Login = () => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={IMAGES.bg} style={{ width: '100%', height: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: HP(16) }}>
                    <RedButton txt={'登入'} />
                    <View style={{ marginTop: HP(3) }}>
                        <RedButton txt={'註冊新會員'} trans />
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',position: 'absolute',bottom:HP(4)}}>
                        <Text style={Styles.txt}>登入即同意 用戶協議</Text>
                        <Text style={{...Styles.txt,marginLeft:WP(7)}}>English Version</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;
