import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';

const Register =()=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack/>
        </View>
    )
}
export default Register;