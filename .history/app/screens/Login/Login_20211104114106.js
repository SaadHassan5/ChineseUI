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
                        <RedButton txt={'請輸入密碼'} trans />
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center',position: 'absolute',bottom:HP(4)}}>
                        <Text style={Styles.txt}>Chinese Version</Text>
                        <Text style={{...Styles.txt,marginLeft:WP(8)}}>English Version</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;
