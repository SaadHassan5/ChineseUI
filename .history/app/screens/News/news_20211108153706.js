import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { NewsStyle as Styles} from './news-style';

const News =(props)=>{
    return(
        <View style={{...Styles.container}}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <ScrollView>
                {CONST.news.map((item,i)=>
                <View key={i} style={{paddingHorizontal:WP(10),paddingVertical:WP(5)}}>
                    <Image source={item.img} resizeMode={'stretch'} style={{width:WP(80),height:HP(25)}}/>
                    <Text style={{...Styles.titleTxt}}>{item.title}</Text>
                    <Text style={{...Styles.dateTxt}}>{item.date}</Text>
                    <Text numberOfLines={2} style={{...Styles.detailTxt}}>{item.details}</Text>
                </View>
                )}
                </ScrollView>
            </View>
        </View>
    )
}
export default News;