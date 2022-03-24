import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { CouponStyle as Styles} from './coupon-style';

const Coupon =(props)=>{
    return(
        <View style={{...Styles.container}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{...Styles.whiteView}}>
                {CONST.coup.map((item,i)=>
                <View key={i} style={{marginHorizontal:WP(7)}}>
                    <Text>s</Text>
                </View>
                )}
            </View>
        </View>
    )
}
export default Coupon;