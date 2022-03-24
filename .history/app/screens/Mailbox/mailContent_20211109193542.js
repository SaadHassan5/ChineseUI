import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { MailStyles as Styles} from './mail-style';

const MailContent = (props) => {
    useEffect(() => {
        console.log('ee');
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
            </View>
        </View>
    )
}
export default MailContent;