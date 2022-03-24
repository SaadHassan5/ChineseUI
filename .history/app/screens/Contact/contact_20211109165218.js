import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import Svg from 'react-native-svg';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
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
            <View style={{ ...Styles.whiteView, paddingTop: HP(2) }}>
                <Image source={IMAGES.logo} style={{}}/>
                <Text style={{...Styles.welTxt}}>歡迎各位來到撲克領域</Text>
                <Text style={{...Styles.supTxt}}>您的支持及寶貴意見，是我們前進的最佳動力，若您有任何問題，歡迎來電洽詢或email給我們，撲克領域一定會用心、誠意，在24小時內回覆您的問題。</Text>
                {CONST.contact.map((item,i)=>
                <View>
                <Text>{item.title}</Text>
                {/* <Svg /> */}
                </View>
                )}
            </View>
        </View>
    )
}
export default ContactUs;