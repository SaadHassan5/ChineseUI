import React from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { NewStyle as Styles } from './new-style';

const NewMember = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center',position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{  }}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{...Styles.headerTxt}}>註冊新會員</Text>
            </View>
            <View style={{backgroundColor:'white'}}>

            </View>
        </View>
    )
}
export default NewMember;