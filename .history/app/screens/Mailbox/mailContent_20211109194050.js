import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { MailStyles as Styles} from './mail-style';

const MailContent = (props) => {
    const [data,setData] = useState(props.route.params.obj)
    useEffect(() => {
        console.log('ee',data);
    }, [])
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3),borderTopRightRadius:WP(10),borderTopLeftRadius:WP(10),}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={data.img}/>
                </View>
            </View>
        </View>
    )
}
export default MailContent;