import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { HeroStyles as Styles} from './hero-style';

const PokerHeros = (props) => {
    const [isVerify, setIsVerify] = useState(false);
    return (
        <View style={{ ...Styles.container }}>
            
            <ScrollView contentContainerStyle={{paddingTop:HP(10)}}>
            <View style={{ ...Styles.blackView}}>
                {/* <Image source={IMAGES.hero} resizeMode={'stretch'} style={{height:871,width: '100%',}}/> */}
                <SVGS.heroz/>
            </View>
            </ScrollView>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', padding:WP(9) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>撲克英雄榜</Text>
            </View>
        </View>
    )
}
export default PokerHeros;