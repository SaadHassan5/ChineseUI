import React from 'react';
import { ImageBackground, StyleSheet, Text, useColorScheme, View, } from 'react-native';
import { IMAGES } from '../../assets/img';
import { RedButton } from '../assets/components/RedButton/Redbutton';
// import { RedButton } from '../assets/components/RedButton/Redbutton';
import { LoginStyle as Styles } from './login-style';

const Login = () => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={IMAGES.bg} style={{ width: '100%', height: '100%' }}>
                <RedButton txt={'登入'}/>
            </ImageBackground>
        </View>
    )
}

export default Login;
