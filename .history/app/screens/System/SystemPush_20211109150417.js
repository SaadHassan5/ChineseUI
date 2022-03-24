import React, { useState } from 'react';
import {Text, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { SystemStyles as Styles } from './system-style';

const SystemPush = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券</Text>
            </View>
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <Switch
                    trackColor={{ false: "#767577", true: palette.maalta }}
                    // thumbColor={isEnabled?palette.maalta:palette.gray}
                    value={isEnabled}
                    
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                />
                </View>
            </View>
        </View>
    )
}
export default SystemPush;