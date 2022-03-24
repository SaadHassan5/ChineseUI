import React from 'react';
import { View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { NewsStyle as Styles } from './news-style';

const DetailNews =(props)=>{
    return(
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
        </View>
    )
}
export default DetailNews;