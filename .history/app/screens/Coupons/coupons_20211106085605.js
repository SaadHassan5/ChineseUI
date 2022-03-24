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
                    <View key={i} style={{ flexDirection: 'row', width: WP(85), alignSelf: 'center', borderWidth: 2, borderColor: palette.maalta, marginVertical: HP(2),justifyContent:'space-between'}}>
                        <View style={{paddingVertical:HP(2),paddingHorizontal:WP(5)}}>
                            <Text style={{ color: palette.maalta, fontFamily: fontFamily.semi_bold, fontSize: 16 }}>{item.offer}</Text>
                            <Text style={{fontFamily:fontFamily.regular,fontSize:12,lineHeight:14,paddingTop:HP(.5)}}>有效日期：{item.date}  </Text>
                        </View>
                        <View style={{height:'100%',position: 'absolute',right: 0,width: WP(20),backgroundColor:palette.maalta,justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={{backgroundColor:palette.white}}>
                                <Text style={{paddingHorizontal:WP(3)}}>領取</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>
        </View>
    )
}
export default Coupon;