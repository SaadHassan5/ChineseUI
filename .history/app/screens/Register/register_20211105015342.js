import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, useColorScheme, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';

const Register =()=>{
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            <RedBlack/>
        </View>
    )
}
export default Register;