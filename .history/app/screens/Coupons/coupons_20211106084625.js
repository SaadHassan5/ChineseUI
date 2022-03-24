import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { CouponStyle as Styles } from './coupon-style';

const Coupon = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                {CONST.coup.map((item, i) =>
                    <View key={i} style={{ flexDirection: 'row', width: WP(85), alignSelf: 'center', borderWidth: 2, borderColor: palette.maalta, marginVertical: HP(2) }}>
                        <View style={{paddingVertical:HP(2)}}>
                            <Text style={{ color: palette.maalta, fontFamily: fontFamily.semi_bold, fontSize: 16 }}>{item.offer}</Text>
                            <Text style={{fontFamily:fontFamily.regular,fontSize:12}}>有效日期：{item.date}  </Text>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}
export default Coupon;