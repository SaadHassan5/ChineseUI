import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { ContactStyles as Styles } from './contact-style';

const ContactUs = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <Image source={IMAGES.logo} style={{alignSelf:'center'}}/>
            </View>
        </View>
    )
}
export default ContactUs;