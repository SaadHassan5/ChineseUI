import React from 'react';
import {ImageBackground, StyleSheet,Text,useColorScheme,View,} from 'react-native';
import { IMAGES } from '../img';
import { LoginStyle as Styles} from './login-style';

const Login =()=>{
  return(
    <View style={Styles.container}>
      <ImageBackground source={IMAGES.bg} style={{width:'100%',height:'100%'}}>
<Text></Text>
      </ImageBackground>
    </View>
  )
}

export default Login;
