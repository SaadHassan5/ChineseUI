import React from 'react';
import { View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CouponStyle as Styles} from './coupon-style';

const Coupon =(props)=>{
    return(
        <View style={{...Styles.container}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>註冊新會員</Text>
            </View>
            <View style={{...Styles.whiteView}}>

            </View>
        </View>
    )
}
export default Coupon;