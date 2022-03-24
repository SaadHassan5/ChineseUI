import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { AboutStyle as Styles} from './about-style';

const About =(props)=>{
    return(
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>關於撲克領域</Text>
            </View>
            <View style={{...Styles.whiteView}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <ScrollView horizontal>
                    {CONST.pokerField.map((item,i)=>
                    <View>
                        <Image resizeMode={'stretch'} source={item.img} style={{width:WP(80),height:HP(23),marginLeft:WP(5)}}/>
                    </View>
                    )}
                    </ScrollView>
                </View>
                <Text style={{...Styles.titleTxt}}>用科學的方法， 把每一手牌打出最大價值</Text>
            </View>
        </View>
    )
}
export default About;