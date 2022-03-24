import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { MailStyles as Styles } from './mail-style';

const MailContent = (props) => {
    const [data, setData] = useState(props.route.params.obj)
    const [txt, setTxt] = useState(`您在撲克領域所預約的講座【翻牌前基礎策略】已預約成功。

講座日期： 2021/12/27  17:00
講座地點： 台中市南區學府路79號2樓
    
注意事項：
1.如需取消預約，最晚請於講座前一天來電客服04-22853800。不接受當日臨時取消，當日取消或未出席恕無法退還已繳交之費用。
    
2.會員於講座當日若因個人不可抗力之因素(如生病、交通事故)而無法出席，請檢附相關證明文件至本公司辦理退費等相關事宜 (本公司有最終裁量權)。
    
3.如遇天災(如地震、颱風)導致會員無法出席講座，本公司配合政府主管機關發佈之公告，可退還會員已繳交之相關費用。
    
撲克領域 敬上`)
    useEffect(() => {
        console.log('ee', data);
    }, [])
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'優惠券條碼'} props={props} />
            <View style={{ ...Styles.whiteView, }}>
                <ScrollView>
                    <View style={{ paddingTop: HP(3), borderTopRightRadius: WP(10), borderTopLeftRadius: WP(10), paddingHorizontal: WP(8) }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={data.img} style={{ ...Styles.img }} />
                            <View style={{ marginLeft: WP(5), paddingVertical: HP(1) }}>
                                <Text style={{ ...Styles.titleTxt }}>{data.title}</Text>
                                <Text style={{ ...Styles.dateTxt }}>{data.dateTime}</Text>
                            </View>
                        </View>
                        <Text style={{ fontSize: 12, fontFamily: fontFamily.regular, lineHeight: 21, color: '#1C2238', marginLeft: WP(19), textAlign: 'left' }}>{txt}</Text>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default MailContent;