import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import ReactNativeModal from 'react-native-modal';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { WhiteRed } from '../../assets/components/WhiteRedBtn/WhiteRed';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { LectureStyles as Styles } from './lecture-style';

const Lecture = (props) => {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState({});
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'講座'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                {CONST.lecture.map((item, i) =>
                    <View key={i} style={{ ...Styles.cardView }}>
                        <Image source={item.img} style={{ ...Styles.img }} />
                        <View style={{ paddingLeft: WP(5) }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ ...Styles.statusTxt }}>{item.status}</Text>
                                <Text style={{ ...Styles.nameTxt }}>{item.name}</Text>
                                <Text style={{ ...Styles.dateTxt }}>{item.date}</Text>
                            </View>
                            <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                            <View style={{ paddingTop: HP(1) }}>
                                <WhiteRed nav1={() => { setData(item); setIsModal(true), console.log('huaa'); }} txt1={'簡介'} txt2={'預約中'} />
                            </View>
                        </View>
                    </View>
                )}
            </View>
            <ReactNativeModal isVisible={isModal} onBackButtonPress={() => setIsModal(false)} onBackdropPress={() => setIsModal(false)} style={{ margin: 0, position: 'absolute', bottom: 0 }}>
                <View style={{ backgroundColor: palette.white, height: HP(63), width: WP(100), borderTopRightRadius: WP(10), borderTopLeftRadius: WP(10), paddingHorizontal: WP(5), paddingBottom: HP(2) }}>
                    <ScrollView>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: HP(2), borderBottomWidth: .8, marginHorizontal: WP(5), borderColor: palette.lighterGrey }}>
                            <Text style={{ ...Styles.titleTxt, letterSpacing: 1, paddingLeft: WP(4), fontFamily: fontFamily.bold }}>{data.title}</Text>
                            <TouchableOpacity style={{ padding: WP(1) }} onPress={() => setIsModal(false)}>
                                <SVGS.cross />
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderBottomWidth: .5, borderColor: palette.lighterGrey, paddingBottom: HP(1) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(3) }}>
                                <View style={{ width: WP(12), borderRadius: WP(3), paddingVertical: WP(4), backgroundColor: palette.maalta, justifyContent: 'center', alignItems: 'center' }}>
                                    <SVGS.calender1 />
                                </View>
                                <View style={{ paddingLeft: WP(5) }}>
                                    <Text style={{ ...Styles.calTxt }}>{data.calDate}</Text>
                                    <Text style={{ ...Styles.calTxt, paddingTop: HP(1) }}>{data.calTime}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(3) }}>
                                <View style={{ width: WP(12), borderRadius: WP(3), paddingVertical: WP(4), backgroundColor: palette.maalta, justifyContent: 'center', alignItems: 'center' }}>
                                    <SVGS.loc1 />
                                </View>
                                <View style={{ paddingLeft: WP(5) }}>
                                    <Text style={{ ...Styles.calTxt }}>{data.location}</Text>
                                    <Text style={{ ...Styles.calTxt, paddingTop: HP(1) }}>{data.address}</Text>
                                </View>
                            </View>
                        </View>
                        <Text style={{ ...Styles.calTxt, paddingTop: HP(2), fontFamily: fontFamily.semi_bold }}>主講人</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(1.5), borderBottomWidth: .5, borderColor: palette.lighterGrey, paddingBottom: HP(1) }}>
                            <Image source={data.img} style={{ width: WP(13), height: WP(13), borderRadius: WP(2.5) }} />
                            <View style={{ paddingLeft: WP(5) }}>
                                <Text style={{ ...Styles.calTxt }}>{data.status}</Text>
                                <Text style={{ ...Styles.calTxt, paddingTop: HP(1) }}>{data.name}</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{setIsModal(false);props.navigation.navigate('CoachProfile',{obj:data})}} style={{ position: 'absolute', right: WP(2), backgroundColor: palette.maalta, borderRadius: WP(5) }}>
                                <Text style={{ paddingHorizontal: WP(5), paddingVertical: WP(1), color: palette.white }}>簡介</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ ...Styles.calTxt, fontFamily: fontFamily.semi_bold, paddingTop: HP(2) }}>講座簡介</Text>
                        <Text numberOfLines={3} style={{ ...Styles.calTxt, color: '#707070', paddingTop: HP(1) }}>{data.lecIntro}</Text>
                    </ScrollView>
                    <View style={{ paddingTop: HP(1) }}>
                        <RedButton txt={'預約'} />
                    </View>
                </View>
            </ReactNativeModal >
        </View >
    )
}
export default Lecture;