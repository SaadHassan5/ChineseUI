import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import Svg from 'react-native-svg';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
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
                <ScrollView contentContainerStyle={{alignItems:'center'}}>
                <Image source={IMAGES.logo} style={{}} />
                <Text style={{ ...Styles.welTxt }}>歡迎各位來到撲克領域</Text>
                <Text style={{ ...Styles.supTxt }}>您的支持及寶貴意見，是我們前進的最佳動力，若您有任何問題，歡迎來電洽詢或email給我們，撲克領域一定會用心、誠意，在24小時內回覆您的問題。</Text>
                {CONST.contact.map((item, i) =>
                    <View style={{ flexDirection: 'row', alignItems: 'center', width: WP(80), borderWidth: 1, borderColor: palette.lighBlueBtn,marginTop:HP(3),paddingVertical:HP(1.5),paddingHorizontal:WP(3),borderRadius:WP(2.6) }}>
                        <View style={{ backgroundColor: item.backcolor, paddingVertical: WP(4), width: WP(18),justifyContent:'center',alignItems:'center' }}>
                            <item.svg />
                        </View>
                        <View style={{paddingLeft:WP(5)}}>
                            <Text style={{ fontFamily: fontFamily.semi_bold, fontSize: 15, color: '#393939', lineHeight: 29 }}>{item.title}</Text>
                            <Text style={{ fontFamily: fontFamily.light, fontSize: 15, color: '#393939', lineHeight: 29 }}>{item.contact}</Text>
                        </View>
                    </View>
                )}
                </ScrollView>
            </View>
        </View>
    )
}
export default ContactUs;