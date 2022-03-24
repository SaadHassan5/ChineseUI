import React from 'react';
import { ImageBackground, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { HP } from '../../assets/config/screen-ratio';
import { IMAGES } from '../../assets/img';
import { LoginStyle as Styles } from './login-style';

const Login = () => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={IMAGES.bg} style={{ width: '100%', height: '100%' }}>
                <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                <RedButton txt={'登入'}/>
                <RedButton txt={'登入'} trans style={{top:HP(3)}}/>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;