import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { MailStyles as Styles } from './mail-style';

const Mailbox = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>我的信箱</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                {CONST.mail.map((item, i) =>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={item.img} style={{ width: WP(14), height: WP(14), borderRadius: WP(7) }} />
                        <View style={{marginLeft:WP(5)}}>
                            <Text style={{ fontFamily: fontFamily.semi_bold, fontSize: 16, lineHeight: 24, color: '#272F4B' }}>{item.title}</Text>
                            <Text style={{ fontFamily: fontFamily.light, fontSize: 14, lineHeight: 20 }}>{item.dateTime}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default Mailbox;