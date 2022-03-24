import React, { useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { NewsStyle as Styles } from './news-style';

const DetailNews = (props) => {
    const [data,setData] = useState(props.route.params.obj)
    useEffect(()=>{
        console.log(props.route.params.obj);
    },[])
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3),paddingHorizontal:WP(8) }}>
                <Image source={data.img} style={{width: WP(85)}}/>
            </View>
        </View>
    )
}
export default DetailNews;