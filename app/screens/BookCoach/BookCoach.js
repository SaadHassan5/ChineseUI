import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { BookStyles as Styles } from './Book-style';

const BookCoach = (props) => {
    const month = ["January", "February", "March", "April", "May", "June", "July"
        , "August", "September", "October", "November", "December"]
    const weekday = ["日", "一", "二", "三", "四", "五", "六"];

    const [dat, setDat] = useState({});
    const [isVerify, setIsVerify] = useState(false);
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    useEffect(() => {
        const da = new Date();
        console.log(da.getDate());
        setDat({
            month: (da.getMonth()) + 1,
            year: da.getFullYear()
        })
    }, [])
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'預約教練'} props={props}/>
            <View style={{ ...Styles.whiteView, }}>
                <View style={{ alignSelf: 'center', }}>
                    <Image source={IMAGES.coach1} style={{ ...Styles.img }} />
                    <Text style={{ ...Styles.nameTxt }}>許重六</Text>
                </View>
                <Text style={{ ...Styles.britishTxt }}>英國第一牌手，生涯總獎金超過3600萬美金，同時也是2018年首位在全球撲克指數排名第二的英...
                    <Text style={{ color: palette.maalta }}>閱讀更多</Text></Text>
                <Text style={{ ...Styles.datTxt }}>2021年12月</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center',paddingTop:HP(1),paddingLeft:WP(8) }}>
                    <ScrollView horizontal={true}>
                        {weekday.map((item, i) =>
                            <TouchableOpacity key={i} onPress={() => setDay(item)} style={{ ...Styles.touchDay, backgroundColor: item == day ? palette.maalta : '#F2F3F4' }}>
                                <Text style={{ ...Styles.dayTxt, color: item == day ? palette.white : '#77838F' }}>{12 + i}</Text>
                                <Text style={{ ...Styles.numTxt, color: item == day ? palette.white : '#77838F', }}>{item}</Text>
                            </TouchableOpacity>
                        )}
                    </ScrollView>
                </View>
                <FlatList
                    // padding={30}
                    numColumns={3}
                    data={CONST.timing}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, i }) =>
                        <TouchableOpacity key={i} onPress={() => setTime(item)} style={{ marginLeft: WP(8), backgroundColor: time == item ? palette.maalta : '#F2F3F4', paddingHorizontal: WP(5), paddingVertical: HP(1), marginTop: HP(2.5), borderRadius: WP(5) }}>
                            <Text style={{ fontSize: 12, lineHeight: 17, fontFamily: fontFamily.regular, color: time == item ? palette.white : '#77838F' }}>{item}</Text>
                        </TouchableOpacity>
                    }
                />
                <View style={{ paddingVertical: WP(1) }}>
                    <RedButton txt={'預約'} nav={() => setIsVerify(true)} />
                </View>
            </View>
            <VerifyModal isVerify={isVerify} txt1={'系統已收到預約'} txt2={`客服人員將審核過後寄發確認信件
祝您有美好的一天`} setIsVerify={setIsVerify} nav={() => { setIsVerify(false);  }} />
        </View>
    )
}
export default BookCoach;