import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { CoachingStyle as Styles } from './coach-style';

const Coaching = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>註冊新會員</Text>
            </View>
            <View style={{ ...Styles.whiteView }}>
                {CONST.coaches.map((item, key) =>
                    <View key={key} style={{backgroundColor:'#FFFFFF',marginTop:HP(3),alignSelf:'center',borderWidth:1,width: WP(80),}}>
                        <Image source={IMAGES.coach1} style={{width: WP(30),height: WP(30),}}/>
                    </View>
                )}
            </View>
        </View>
    )
}
export default Coaching;