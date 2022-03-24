import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { ArenaStyles as Styles } from './arena-style';

const ArenaMatch = (props) => {
    const [isReq, setIsReq] = useState(false)
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'今日競技館賽事'} props={props}/>
            <View style={{ ...Styles.whiteView, paddingTop: HP(2) }}>
                {CONST.vip.map((item, i) =>
                    <View key={i} style={{ ...Styles.matchView }}>
                        <Image source={item.img} style={{ ...Styles.img }} />
                        <View style={{ ...Styles.inView }}>
                            <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                            <Text style={{ ...Styles.timeTxt }}>{item.time}</Text>
                        </View>
                    </View>
                )}
                {CONST.master.map((item, i) =>
                    <View key={i} style={{ ...Styles.matchView }}>
                        <Image source={item.img} style={{ ...Styles.img }} />
                        <View style={{ ...Styles.inView }}>
                            <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                            <Text style={{ ...Styles.timeTxt }}>{item.seats}/10</Text>
                        </View>
                        <TouchableOpacity onPress={()=>setIsReq(true)} disabled={item.seats < 10 ? false : true} style={{ position: 'absolute', right: WP(3), backgroundColor: item.seats < 10 ? palette.maalta : '#D2D2D2', paddingHorizontal: WP(1.5), paddingVertical: HP(.3), borderRadius: WP(3) }}>
                            <Text style={{ color: palette.white }}>預約</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
            <VerifyModal isVerify={isReq} setIsVerify={setIsReq} nav={()=>setIsReq(false)} txt1={'系統已收到預約'} txt2={'客服人員將審核過後寄發確認信件\n祝您有美好的一天'} />
        </View>
    )
}
export default ArenaMatch;