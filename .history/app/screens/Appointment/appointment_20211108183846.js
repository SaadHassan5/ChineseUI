import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { AppointStyle as Styles} from './appoint-Style';

const Appointment =(props)=>{
    return(
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
            <View style={{...Styles.whiteView}}>
                {CONST.appoint.map((item,i)=>
                <View key={i} style={{paddingHorizontal:WP(10)}}>
                    <Text>{item.title}</Text>
                    <Text>{item.date}</Text>
                </View>
                )}
            </View>
        </View>
    )
}
export default Appointment;