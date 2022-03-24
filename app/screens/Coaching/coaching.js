import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { WhiteRed } from '../../assets/components/WhiteRedBtn/WhiteRed';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { CoachingStyle as Styles } from './coach-style';

const Coaching = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            <CustomHeader txt={'教練課程'} props={props}/>
            <View style={{ ...Styles.whiteView }}>
                <ScrollView>
                    {CONST.coaches.map((item, key) =>
                        <View key={key} style={{ backgroundColor: '#FFFFFF', marginTop: HP(3), alignSelf: 'center', borderBottomWidth: 1, borderColor: palette.lighBlueBtn, width: WP(80), paddingVertical: HP(.5), paddingHorizontal: WP(3), borderRadius: WP(3) }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={item.img} style={{ width: WP(20), height: WP(20), borderRadius: WP(2.5) }} />
                                <View style={{ paddingLeft: WP(5) }}>
                                    <View>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={{ backgroundColor: '#FFC640', paddingHorizontal: WP(3), paddingVertical: HP(.5), borderRadius: WP(4), color: palette.white, fontSize: 10, fontFamily: fontFamily.regular }}>{item.status}</Text>
                                            <Text style={{ fontFamily: fontFamily.medium, fontSize: 15, color: palette.black, paddingLeft: WP(4) }}>{item.name}</Text>
                                        </View>
                                        <View style={{ paddingTop: HP(1) }}>
                                            <WhiteRed txt1={'簡介'} txt2={'簡介'} nav1={()=>props.navigation.navigate("CoachProfile",{obj:item})} nav2={()=>props.navigation.navigate("BookCoach")} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}
                </ScrollView>
            </View>
        </View>
    )
}
export default Coaching;