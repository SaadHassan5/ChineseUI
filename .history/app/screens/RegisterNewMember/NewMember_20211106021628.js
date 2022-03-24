import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, } from 'react-native';
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
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'center', marginTop: HP(2) }}>
                    <Image style={{ ...Styles.dp }} source={IMAGES.dp} />
                    <SVGS.camera style={{ marginLeft: -WP(8) }} />
                </View>
                <View style={{ paddingHorizontal: WP(8), paddingTop: HP(4) }}>
                    <Text style={{ ...Styles.lbl }}>姓名</Text>
                    <TextInput placeholder='Name' placeholderTextColor={'#38385E'} style={{...Styles.inp}}/>
                    <Text style={{ ...Styles.lbl,marginTop:HP(1.5) }}>暱稱</Text>
                    <TextInput placeholder='Nickname' placeholderTextColor={'#38385E'} style={{...Styles.inp}}/>
                </View>
            </View>
        </View>
    )
}
export default NewMember;