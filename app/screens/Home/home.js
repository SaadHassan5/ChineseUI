import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { ShareModal } from '../../assets/components/GoShare/shareModal';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { HomeStyle as Styles } from './home-style';
import Icon from 'react-native-vector-icons/FontAwesome5' 

const Home = (props) => {
    const [isMine, setIsMine] = useState(props?.route?.params?.isMine)
    const [isShare, setIsShare] = useState(false)
    useState(() => {
        console.log(props?.route?.params?.isMine);
    }, [props?.route?.params], isMine)
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            {/* <ScrollView> */}
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: HP(2) }}>
                <View style={{ marginHorizontal: WP(7), }}>
                    <Image source={IMAGES.dp} style={{ ...Styles.dp }} />
                    <View style={{ ...Styles.vipView, position: 'absolute', right: WP(0) }}>
                        <SVGS.vipBadge />
                    </View>
                </View>
                <View>
                    <Text style={{ ...Styles.lbl }}>我的等級</Text>
                    <Text style={{ ...Styles.gradeTxt }}>-</Text>

                    <Text style={{ ...Styles.lbl }}>我的排名</Text>
                    <Text style={{ ...Styles.gradeTxt }}>-</Text>
                </View>
                <TouchableOpacity onPress={() => { setIsShare(true) }} style={{ marginLeft: WP(2) }}>
                    <View style={{}}>
                        <SVGS.gold />
                        <View style={{...Styles.vipView,borderRadius:WP(5),padding:WP(1.2),position: 'absolute',right:WP(1)}}>
                            <SVGS.shareBadge />
                        </View>
                    </View>
                </TouchableOpacity>
                <ShareModal isShare={isShare} setIsShare={setIsShare} />
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
                    <ScrollView>
                        {isMine ?
                            <View style={{ paddingVertical: HP(5), paddingHorizontal: WP(10) }}>
                                <SVGS.cancel onPress={() => setIsMine(!isMine)} style={{ position: 'absolute', right: WP(5), marginTop: HP(2), padding: WP(2) }} />

                                <TouchableOpacity onPress={() => props.navigation.navigate('Membership')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon name={'smile-beam'} color={palette.maalta} size={22}/>
                                    <Text style={{ ...Styles.isMineLbl }}>我的會籍</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('Appointment')} style={{ flexDirection: 'row', alignItems: 'center',marginTop: HP(3)  }}>
                                    <SVGS.appointment />
                                    <Text style={{ ...Styles.isMineLbl }}>預約紀錄</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('PointRecord')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: HP(3) }}>
                                    <SVGS.point />
                                    <Text style={{ ...Styles.isMineLbl }}>我的積分</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('AccountSetting')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: HP(3) }}>
                                    <SVGS.account />
                                    <Text style={{ ...Styles.isMineLbl }}>帳號設定</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('SystemPush')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: HP(3) }}>
                                    <SVGS.system />
                                    <Text style={{ ...Styles.isMineLbl }}>系統通知</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('HelpCenter')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: HP(3) }}>
                                    <SVGS.help />
                                    <Text style={{ ...Styles.isMineLbl }}>幫助中心</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => props.navigation.navigate('About')} style={{ flexDirection: 'row', alignItems: 'center', marginTop: HP(3) }}>
                                    <SVGS.about />
                                    <Text style={{ ...Styles.isMineLbl }}>關於撲克領域</Text>
                                </TouchableOpacity>
                            </View>
                            :
                            <View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: WP(5), paddingTop: HP(3) }}>
                                    
                                    <TouchableOpacity onPress={() => props.navigation.navigate('ArenaMatch')}>
                                        <SVGS.arenaEvents style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>競技館賽事</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => props.navigation.navigate('Coaching')}>
                                        <SVGS.coaching style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>教練課程</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => props.navigation.navigate('Lecture')}>
                                        <SVGS.course style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>講座</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => props.navigation.navigate('Calender')}>
                                        <SVGS.calender style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>行事曆</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', paddingHorizontal: WP(5), paddingTop: HP(3) }}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('News')}>
                                        <SVGS.announcement style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>最新公告</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => props.navigation.navigate('PokerHeros')}>
                                        <SVGS.heros style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>撲克英雄榜</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => props.navigation.navigate('Coupon')}>
                                        <SVGS.coupon style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>優惠券</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={() => setIsMine(!isMine)}>
                                        <SVGS.mine style={{ padding: 10 }} />
                                        <Text style={{ ...Styles.optTxt }}>我的</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ alignSelf: 'center', marginTop: HP(3) }}>
                                    {/* <Image source={IMAGES.coup} /> */}
                                    <SVGS.coop onPress={() => console.log('sss')} />
                                </TouchableOpacity>
                                <Image source={IMAGES.carousel} style={{ alignSelf: 'center', marginTop: HP(2) }} />

                            </View>
                        }
                    </ScrollView>
                </View>
            </View>
            {/* </ScrollView> */}
        </View>
    )
}
export default Home;