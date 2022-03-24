import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { NewStyle as Styles } from './new-style';

const NewMember = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>註冊新會員</Text>
            </View>
            <View style={{ ...Styles.whiteView }}>
                <View style={{flexDirection:'row',alignItems:'flex-end',alignSelf:'center'}}>
                    <Image style={{ ...Styles.dp }} source={IMAGES.dp} />
                    <SVGS.camera/>
                </View>
            </View>
        </View>
    )
}
export default NewMember;