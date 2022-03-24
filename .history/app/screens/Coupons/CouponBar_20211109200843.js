import React, { createRef, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { CouponStyle as Styles } from './coupon-style';

const CouponBar = (props) => {
    const [qrvalue, setQrvalue] = useState('saad');
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
            <Text style={{fontSize:12,lineHeight:28,fontFamily:fontFamily.regular,color:palette.white,marginTop:HP(15),}}>請出示此畫面提供櫃台人員掃描</Text>
            <View style={{ alignItems: 'center', justifyContent: 'center',backgroundColor:palette.white,alignSelf:'center',padding:HP(1.5) }}>
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
            <View style={{backgroundColor:palette.white,flex:1,alignItems:'center'}}>
                <Text style={{...Styles.cardsTxt}}>張撲克</Text>
                <Text style={{...Styles.cardsTxt,paddingTop:HP(1)}}>ID:32651</Text>
            </View>
        </View>
    )
}
export default CouponBar;