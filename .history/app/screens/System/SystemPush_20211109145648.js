import React from 'react';
import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { SystemStyles as Styles } from './system-style';

const SystemPush = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <Switch
                    trackColor={{ false: "#767577", true: palette.maalta }}
                    thumbColor={palette.maalta}
                    ios_backgroundColor="#3e3e3e"
                    // onValueChange={toggleSwitch}
                    value={true}
                />
            </View>
        </View>
    )
}
export default SystemPush;