import React, { useState } from 'react';
import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { PointStyles as Styles } from './Point-style';

const PointRecord = (props) => {
    const [show, setShow] = useState('record')
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'我的積分'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(5) }}>
                <ScrollView>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{ ...Styles.num }}>1520</Text>
                        <Text style={{ ...Styles.scoreTxt }}>我的積分</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: HP(3) }}>
                        <TouchableOpacity onPress={() => setShow('record')} style={{ borderColor: palette.maalta, backgroundColor: show == 'record' ? palette.maalta : palette.white, ...Styles.whiteLbl }}>
                            <Text style={{ ...Styles.lblTxt, color: show == 'record' ? palette.white : palette.maalta }}>積分紀錄</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setShow('tablet')} style={{ marginLeft: WP(3), borderColor: palette.maalta, backgroundColor: show == 'tablet' ? palette.maalta : palette.white, ...Styles.whiteLbl }}>
                            <Text style={{ ...Styles.lblTxt, color: show == 'tablet' ? palette.white : palette.maalta }}>積分牌位</Text>
                        </TouchableOpacity>
                    </View>
                    {show == 'record' &&
                        <View>
                            {CONST.record.map((item, i) =>
                                <View key={i} style={{ marginTop: HP(2), paddingTop: HP(2), borderTopWidth: .5, borderColor: palette.lighterGrey }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                                        <Text style={{ ...Styles.pointTxt, color: item.points < 0 ? 'red' : '#2112EF' }}>{item.points}</Text>
                                    </View>
                                    <Text style={{ ...Styles.pointTxt, color: '#707070', paddingTop: WP(1) }}>{item.date}</Text>
                                </View>
                            )
                            }
                        </View>
                    }
                    {show == 'tablet' &&
                        <View>
                            {CONST.tablet.map((item, i) =>
                                <TouchableOpacity key={i} style={{ ...Styles.tabletView }}>
                                    <Image source={item.img} resizeMode={'stretch'} style={{ ...Styles.img }} />
                                    <View style={{ paddingLeft: WP(5) }}>
                                        <Text style={{ ...Styles.titTxt }}>{item.title}</Text>
                                        <Text style={{ ...Styles.priceTxt }}>{item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default PointRecord;