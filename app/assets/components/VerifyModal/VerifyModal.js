import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { SVGS } from '../../img';

export const VerifyModal = ({ txt1, txt2, isVerify, setIsVerify, nav, btn, navBtn }) => {
    const Styles = StyleSheet.create({
        txtOne: {
            fontFamily: fontFamily.bold,
            fontSize: 30,
            color: palette.black,
            alignSelf: 'center',
            paddingTop: HP(3),
        },
        txtTwo: {
            fontFamily: fontFamily.medium,
            fontSize: 14,
            color: palette.black,
            lineHeight: 20,
            // alignSelf: 'center',
            paddingTop: HP(3),
            textAlign: 'center',
            paddingHorizontal:WP(5)
        },
        touch: {
            backgroundColor: palette.maalta,
            alignSelf: 'center',
            borderRadius: WP(6),
            width: '80%',
            borderWidth: 0,
            borderColor: palette.white,
            position: 'absolute',
            bottom: HP(3)
        },
        txt: {
            fontFamily: fontFamily.semi_bold,
            paddingVertical: HP(1.5),
            fontSize: 16,
            textAlign: 'center',
            color: palette.white
        }
    })
    return (
        <ReactNativeModal onBackButtonPress={() => setIsVerify(false)} onBackdropPress={nav} style={{ margin: 0 }} isVisible={isVerify}>
            <View style={{ height: btn ? HP(30) : HP(24), width: WP(70), backgroundColor: palette.white, alignSelf: 'center', borderRadius: WP(3), position: 'absolute', top: HP(20) }}>
                {!btn &&
                    <TouchableOpacity onPress={nav} style={{ padding: WP(3), position: 'absolute', right: WP(3), }}>
                        <SVGS.cross />
                    </TouchableOpacity>
                }
                <Text style={{ ...Styles.txtOne }}>{txt1}</Text>
                <Text style={{ ...Styles.txtTwo }}>{txt2}</Text>
                {btn &&
                    <TouchableOpacity onPress={navBtn} style={{ ...Styles.touch }}>
                        <Text style={{ ...Styles.txt }}>我知道了</Text>
                    </TouchableOpacity>
                }
            </View>

        </ReactNativeModal>
    )

}
