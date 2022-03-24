import React, { createRef, useEffect, useState } from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, TouchableOpacity, Platform, ToastAndroid } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const CouponBar = () => {
    const [qrvalue, setQrvalue] = useState('saad');
    return (
        <View style={{flex:1}}>
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
    )
}
export default CouponBar;