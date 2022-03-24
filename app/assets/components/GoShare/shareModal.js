import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, Share, ImageBackground } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { palette } from '../../config/colors';
import fontFamily from '../../config/fontFamily';
import { HP, WP } from '../../config/screen-ratio';
import { IMAGES, SVGS } from '../../img';
import { RedButton } from '../RedButton/RedButton';

export const ShareModal = ({ isShare, setIsShare }) => {
    const Styles = StyleSheet.create({
        playTxt: {
            fontSize: 38,
            fontFamily: fontFamily.boldItalic,
            textAlign: 'center',
            color: palette.white,
            paddingTop: HP(1)
        },
        upgradeTxt: {
            color: palette.white,
            textAlign: "center",
            fontSize: 15,
            lineHeight: 18,
            fontFamily: fontFamily.bold,
            paddingTop: HP(2)
        },
        idTxt: {
            fontFamily: fontFamily.regular,
            fontSize: 11,
            lineHeight: 13,
            color: palette.white,
            textAlign: 'center',
            paddingTop: HP(2)
        }
    })
    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              'React Native | A framework for building native apps using React',
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
        setIsShare(false)
      };
    return (
        <ReactNativeModal backdropColor={'black'} style={{ backgroundColor: 'black', margin: 0 }} isVisible={isShare} onBackButtonPress={() => setIsShare(false)} onBackdropPress={() => setIsShare(false)}>
            <View>
                <View style={{ height: 572.886, width: 288.89, backgroundColor: palette.black, alignSelf: 'center' }}>
                    {/* <View style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
                        <SVGS.back />
                    </View> */}
                    <ImageBackground source={IMAGES.brownBack} style={{width:'100%',height:'100%'}}>
                    <Text style={{ ...Styles.playTxt }}>LET'S PLAY{'\n'}POKER !</Text>
                    <SVGS.gold height={HP(23)} width={WP(46)} style={{ alignSelf: 'center' }} />
                    <Text style={{ ...Styles.upgradeTxt }}>我已升級到金牌啦{'\n'}快來撲克領域找我一起玩</Text>
                    <Text style={{ ...Styles.idTxt }}>邀請人：陳小五  ID：123563</Text>
                    {/* <View style={{ position: "absolute", bottom: 0, alignSelf: 'center' }}>
                        <SVGS.blueBack />
                    </View> */}
                    <View style={{ bottom: HP(3.5), alignSelf: 'center', position: 'absolute', }}>
                        <SVGS.log />
                        <Text style={{ ...Styles.upgradeTxt, fontFamily: fontFamily.regular, fontSize: 12,paddingTop:HP(1) }}>台中市南區學府路79號2樓{'\n'}pokerdomain.com.tw</Text>
                    </View>
                    </ImageBackground>
                </View>
                <View style={{marginTop:HP(3)}}>
                    <RedButton nav={()=>onShare()} txt={'去分享'} />
                </View>
            </View>
        </ReactNativeModal>
    )

}
