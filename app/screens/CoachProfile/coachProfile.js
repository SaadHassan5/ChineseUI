import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedLable } from '../../assets/components/RedLable/RedLable';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { CoachProfileStyles as Styles } from './coachProfile-style';

const CoachProfile = (props) => {
    const [data, setData] = useState(props.route.params.obj);
    useEffect(() => {
        console.log('ss', props.route.params);
    }, [])
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'簡介'} props={props}/>
            <View style={{ ...Styles.whiteView, }}>
                <View style={{ alignSelf: 'center', marginTop: -HP(6), }}>
                    <Image source={data.img} style={{ width: WP(25), height: WP(25), borderRadius: WP(2.5) }} />
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...Styles.nameTxt }}>{data.name}</Text>
                        <Text style={{ ...Styles.statusTxt, marginLeft: WP(3) }}>{data.status}</Text>
                    </View>
                </View>
                <View style={{ paddingVertical: HP(2) }}>
                    <RedLable txt={'簡介'} />
                </View>
                <Text style={{ ...Styles.introTxt }}>賓州大學電機碩士，2010由SNG(坐滿就玩)起家，從存入1000台幣到三年內獲利800萬．之後對撲克感到倦怠開始多方教學並且嘗試各種生活方式，期間培育出許多持續獲利的玩家與教練．2016年開始接觸現場錦標賽，馬上打出亮眼成績．風格多變，喜歡鑽研各種刁鑽打法與小酌．</Text>
                <View style={{ paddingVertical: HP(2) }}>
                    <RedLable txt={'比賽經歷'} />
                </View>
                <Text style={{ ...Styles.introTxt }}>1.紅龍盃Megastack冠軍 - 獎金100萬台幣{'\n'}
                    2.馬尼拉Megastack主賽冠軍 - 獎金180萬台幣</Text>
                <View style={{ paddingVertical: HP(2) }}>
                    <RedLable txt={'擅長領域'} />
                </View>
                <Text style={{...Styles.introTxt}}>現場錦標賽、APP現金桌</Text>
                <View style={{ paddingVertical: HP(2) }}>
                    <RedLable txt={'教學內容'} />
                </View>
                <Text style={{...Styles.introTxt}}>APP實戰、線上現金桌實戰</Text>
            </View>
        </View>
    )
}
export default CoachProfile;