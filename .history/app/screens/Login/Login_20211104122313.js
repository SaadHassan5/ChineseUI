import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { LoginStyle as Styles } from './login-style';
import { RedButton } from '../../assets/components/RedButton/RedButton';

const Login = (props) => {
    return (
        <View style={Styles.container}>
            <ImageBackground source={IMAGES.bg} style={{ width: '100%', height: '100%' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, marginTop: HP(0) }}>
                    <SVGS.start style={{marginTop:HP(1)}}/>
                    <View style={{marginTop:HP(5)}}>
                    <RedButton  txt={'登入'} />
                    <View style={{ marginTop: HP(3) }}>
                        <RedButton nav={()=>props.navigation.navigate('Register')} txt={'註冊新會員'} trans />
                    </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: HP(4) }}>
                        <TouchableOpacity>
                        <Text style={Styles.txt}>登入即同意 用戶協議</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: WP(7) }}>
                        <Text style={{ ...Styles.txt,}}>English Version</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;
