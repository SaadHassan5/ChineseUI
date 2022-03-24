import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { CalenderStyles as Styles } from './calender-style';

import Icon from 'react-native-vector-icons/AntDesign';
import fontFamily from '../../assets/config/fontFamily';
import { CONST } from '../../assets/config/constants';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
const Calender = (props) => {
    const [dat, setDate] = useState('')
    const [opt, setOpt] = useState('all')
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'行事曆'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(1) }}>
                <ScrollView>
                    <View style={{ paddingHorizontal: WP(6) }}>
                        <Calendar
                            markingType={'custom'}
                            renderArrow={(dir) => (

                                <View>
                                    {dir == 'right' &&
                                        <View style={{ padding: WP(2), backgroundColor: palette.maalta, borderRadius: WP(6) }}>
                                            <Icon name={'right'} size={20} color={palette.white} />
                                        </View>
                                    }
                                    {dir == 'left' &&
                                        <View style={{ padding: WP(2), backgroundColor: palette.maalta, borderRadius: WP(6) }}>
                                            <Icon name={'left'} size={20} color={palette.white} />
                                        </View>
                                    }
                                </View>
                            )
                            }
                            enableSwipeMonths={true}
                            // customHeader={(date) => (<View></View>)}
                            //     <View>
                            //         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            //             <TouchableOpacity onPress={() => {console.log(date);}} style={{ padding: WP(2), backgroundColor: palette.maalta, borderRadius: WP(6) }}>
                            //                 <Icon name={'left'} size={20} color={palette.white} />
                            //             </TouchableOpacity>
                            //             <Text style={{ fontFamily: fontFamily.light, fontSize: 15, lineHeight: 17, color: palette.black }}>2021 年 12 月</Text>
                            //             <TouchableOpacity style={{ padding: WP(2), backgroundColor: palette.maalta, borderRadius: WP(6) }}>
                            //                 <Icon name={'right'} size={20} color={palette.white} />
                            //             </TouchableOpacity>
                            //         </View>
                            //         <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:WP(4),paddingTop:HP(1)}}>
                            //             <Text style={{...Styles.dayTxt}}>一</Text>
                            //             <Text style={{...Styles.dayTxt}}>二</Text>
                            //             <Text style={{...Styles.dayTxt}}>三</Text>
                            //             <Text style={{...Styles.dayTxt}}>四</Text>
                            //             <Text style={{...Styles.dayTxt}}>五</Text>
                            //             <Text style={{...Styles.dayTxt}}>六</Text>
                            //             <Text style={{...Styles.dayTxt}}>日</Text>
                            //         </View>
                            //     </View>
                            // )}
                            onDayPress={(e) => { console.log('ss', e.dateString); setDate(e.dateString) }}
                            // customHeader={()=>{}}
                            markedDates={{
                                [dat]: {
                                    customStyles: {
                                        container: {
                                            backgroundColor: palette.maalta,
                                            // width:WP(3),height:HP(2),
                                            // padding:WP(2)
                                        },
                                        text: {
                                            color: 'white',
                                            fontWeight: 'bold',
                                            // fontSize:40
                                        }
                                    }
                                },
                            }}
                        />
                    </View>
                    <View style={{ backgroundColor: '#515151', flexDirection: 'row', alignItems: 'center', paddingVertical: HP(1.5), paddingHorizontal: WP(8) }}>
                        <TouchableOpacity onPress={() => setOpt('all')} style={{ ...Styles.touchAll, backgroundColor: opt == 'all' ? palette.maalta : palette.white, }}>
                            <Text style={{ ...Styles.allTxt, color: opt == 'all' ? palette.white : palette.black }}>全部</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOpt('event')} style={{ ...Styles.touchAll, marginLeft: WP(3), backgroundColor: opt == 'event' ? palette.maalta : palette.white, }}>
                            <Text style={{ ...Styles.allTxt, color: opt == 'event' ? palette.white : palette.black }}>賽事資訊</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setOpt('res')} style={{ ...Styles.touchAll, marginLeft: WP(3), backgroundColor: opt == 'res' ? palette.maalta : palette.white, }}>
                            <Text style={{ ...Styles.allTxt, color: opt == 'res' ? palette.white : palette.black }}>已預約課程</Text>
                        </TouchableOpacity>
                    </View>
                    {opt == 'all' &&
                        <View style={{ paddingHorizontal: WP(1) }}>
                            {CONST.all.map((item, i) =>
                                <View key={i} style={{ ...Styles.matchView }}>
                                    <Image source={item.img} style={{ ...Styles.img }} />
                                    <View style={{ ...Styles.inView }}>
                                        <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                                        <Text style={{ ...Styles.timeTxt }}>時間  : {item.time}</Text>
                                        <Text style={{ ...Styles.timeTxt }}>地點  : {item.place}</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => console.log('saad')} disabled={item.reserve ? false : true} style={{ position: 'absolute', right: WP(3), backgroundColor: item.reserve ? palette.maalta : '#D2D2D2', paddingHorizontal: WP(1.5), paddingVertical: HP(.7), borderRadius: WP(3) }}>
                                        <Text style={{ color: palette.white }}>預約</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    }
                    {opt == 'event' &&
                        <View style={{ paddingHorizontal: WP(1) }}>
                            {CONST.all.map((item, i) =>
                                <View key={i}>
                                    {item.reserve == false &&
                                        <View style={{ ...Styles.matchView }}>
                                            <Image source={item.img} style={{ ...Styles.img }} />
                                            <View style={{ ...Styles.inView }}>
                                                <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                                                <Text style={{ ...Styles.timeTxt }}>時間  : {item.time}</Text>
                                                <Text style={{ ...Styles.timeTxt }}>地點  : {item.place}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => console.log('saad')} disabled={item.reserve ? false : true} style={{ position: 'absolute', right: WP(3), backgroundColor: item.reserve ? palette.maalta : '#D2D2D2', paddingHorizontal: WP(1.5), paddingVertical: HP(.7), borderRadius: WP(3) }}>
                                                <Text style={{ color: palette.white }}>額滿</Text>
                                            </TouchableOpacity>
                                        </View>
                                    }
                                </View>
                            )}
                        </View>
                    }
                    {opt == 'res' &&
                        <View style={{ paddingHorizontal: WP(1) }}>
                            {CONST.all.map((item, i) =>
                                <View key={i}>
                                    {item.reserve == true &&
                                        <View style={{ ...Styles.matchView }}>
                                            <Image source={item.img} style={{ ...Styles.img }} />
                                            <View style={{ ...Styles.inView }}>
                                                <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                                                <Text style={{ ...Styles.timeTxt }}>時間  : {item.time}</Text>
                                                <Text style={{ ...Styles.timeTxt }}>地點  : {item.place}</Text>
                                            </View>
                                        </View>
                                    }
                                </View>
                            )}
                        </View>
                    }
                </ScrollView>
            </View>
        </View>
    )
}
export default Calender;