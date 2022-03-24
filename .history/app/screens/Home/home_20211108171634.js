import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { HomeStyle as Styles } from './home-style';

const Home = (props) => {
    const [isMine, setIsMine] = useState(false)
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            {/* <ScrollView> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: HP(2) }}>
                <Image source={IMAGES.dp} style={{ ...Styles.dp }} />
                <View>
                    <Text style={{ ...Styles.lbl }}>我的等級</Text>
                    <Text style={{ ...Styles.gradeTxt }}>-</Text>

                    <Text style={{ ...Styles.lbl }}>我的排名</Text>
                    <Text style={{ ...Styles.gradeTxt }}>-</Text>
                </View>
            </View>
            <View style={{ backgroundColor: '#EB4918', flex: 1, borderTopLeftRadius: WP(8), borderTopRightRadius: WP(8) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingBottom: HP(2), paddingTop: HP(1) }}>
                    <View>
                        <Text style={{ ...Styles.nick }}>暱稱</Text>
                        <Text style={{ ...Styles.name }}>張撲克</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.nick }}>ID</Text>
                        <Text style={{ ...Styles.name }}>3421</Text>
                    </View>
                    <View>
                        <Text style={{ ...Styles.nick }}>積分</Text>
                        <Text style={{ ...Styles.name }}>0</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: palette.white, flex: 1, borderTopRightRadius: WP(8), borderTopLeftRadius: WP(8) }}>
                    {isMine ?
                        <View style={{ paddingVertical: HP(5), paddingHorizontal: WP(10) }}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <SVGS.appointment />
                                <Text style={{ ...Styles.isMineLbl }}>預約紀錄</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginTop:HP(3) }}>
                                <SVGS.point />
                                <Text style={{ ...Styles.isMineLbl }}>積分紀錄</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginTop:HP(3) }}>
                                <SVGS.account />
                                <Text style={{ ...Styles.isMineLbl }}>積分紀錄</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginTop:HP(3) }}>
                                <SVGS.system />
                                <Text style={{ ...Styles.isMineLbl }}>積分紀錄</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginTop:HP(3) }}>
                                <SVGS.help />
                                <Text style={{ ...Styles.isMineLbl }}>積分紀錄</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center',marginTop:HP(3) }}>
                                <SVGS.about />
                                <Text style={{ ...Styles.isMineLbl }}>積分紀錄</Text>
                            </TouchableOpacity>
                            <SVGS.system onPress={()=>console.log('dkjsjjskj')}/>
                        </View>
                        :
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: WP(5), paddingTop: HP(3) }}>
                                <TouchableOpacity>
                                    <SVGS.arenaEvents style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>競技館賽事</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => props.navigation.navigate('Coaching')}>
                                    <SVGS.coaching style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>教練課程</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <SVGS.course style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>講座</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <SVGS.calender style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>行事曆</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: WP(5), paddingTop: HP(3) }}>
                                <TouchableOpacity onPress={() => props.navigation.navigate('News')}>
                                    <SVGS.announcement style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>最新公告</Text>
                                </TouchableOpacity>

                                <TouchableOpacity>
                                    <SVGS.heros style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>撲克英雄榜</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => props.navigation.navigate('CouponBar')}>
                                    <SVGS.coupon style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>優惠券</Text>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => setIsMine(!isMine)}>
                                    <SVGS.mine style={{ padding: 10 }} />
                                    <Text style={{ ...Styles.optTxt }}>我的</Text>
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity style={{ alignSelf: 'center', marginTop: HP(3) }}>
                                <Image source={IMAGES.coup} />
                            </TouchableOpacity>
                            <Image source={IMAGES.carousel} style={{ alignSelf: 'center', marginTop: HP(2) }} />

                        </View>
                    }
                </View>
            </View>
            {/* </ScrollView> */}
        </View>
    )
}
export default Home;