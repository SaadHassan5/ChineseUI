import React, { createRef, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { CouponStyle as Styles } from './coupon-style';

const CouponBar = (props) => {
    const [qrvalue, setQrvalue] = useState('saad');
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ alignItems: 'center', justifyContent: 'center',paddingVertical:HP(15) }}>
                <QRCode
                    value={qrvalue ? qrvalue : 'NA'}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    //Logo of in the center of QR Code (Optional)
                    // logo={{
                    //     url:
                    //         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/logosmalltransparen.png',
                    // }}
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                    logoBackgroundColor="yellow"
                />
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
        </View>
    )
}
export default CouponBar;