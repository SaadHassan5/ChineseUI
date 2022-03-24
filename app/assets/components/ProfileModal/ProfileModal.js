import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { IMAGES, SVGS } from '../../img';
import { RedButton } from '../RedButton/RedButton';

export const ProfileModal = ({ txt1, txt2, isVerify, setIsVerify, nav }) => {
    const Styles = StyleSheet.create({
        img: {
            width: WP(20), height: WP(20), alignSelf: 'center',
            borderRadius: WP(10), marginTop: -HP(5)
        },
        helloTxt: {
            fontFamily: fontFamily.bold,
            fontSize: 30,
            // lineHeight:32,
            color: palette.black, paddingTop: HP(1)
        },
        thanksTxt: {
            textAlign: 'center',
            fontSize: 14,
            fontFamily: fontFamily.regular,
            color: '#777777',
            lineHeight: 30,
            paddingTop: HP(2)
        },
        touch:{
            backgroundColor:palette.maalta,
            alignSelf:'center',
            borderRadius:WP(6),
            width:'80%',
            borderWidth:0,
            borderColor:palette.white,
            position: 'absolute',
            bottom:HP(3)
        },
        txt:{
            fontFamily:fontFamily.semi_bold,
            paddingVertical:HP(1.5),
            fontSize:16,
            textAlign:'center',
            color:palette.white
        }
    })
    return (
        <ReactNativeModal style={{ margin: 0 }} isVisible={isVerify}>
            <View style={{ width: WP(74), height: HP(50), backgroundColor: palette.white, alignSelf: 'center', borderRadius: WP(5), alignItems: 'center' }}>
                <Image source={IMAGES.dp} style={{ ...Styles.img }} />
                <Text style={{ ...Styles.helloTxt }}>Hello 張撲克 !</Text>
                <Text style={{ ...Styles.thanksTxt }}>謝謝您加入撲克領域會員{'\n'}
                    現在您可以接收最新課程講座消息{'\n'}
                    預約教練一指搞定{'\n'}
                    還有更多專屬優惠活動！</Text>
               
               <TouchableOpacity onPress={nav} style={{...Styles.touch}}>
                   <Text style={{...Styles.txt}}>看看有什麼新鮮事</Text>
               </TouchableOpacity>
            </View>
        </ReactNativeModal>
    )

}
