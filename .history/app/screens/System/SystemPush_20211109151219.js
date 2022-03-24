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
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:HP(4)}}>
                <Switch
                    trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                    thumbColor={isEnabled?palette.maalta:'#B8B8D2'}
                    value={isEnabled}
                    // backgroundColor={palette.maalta}
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                />
                <Text style={{...Styles.lbl}}>我的信箱</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:HP(4)}}>
                <Switch
                    trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                    thumbColor={isEnabled?palette.maalta:'#B8B8D2'}
                    value={isEnabled}
                    // backgroundColor={palette.maalta}
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                />
                <Text style={{...Styles.lbl}}>競技館賽事</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:HP(4)}}>
                <Switch
                    trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                    thumbColor={isEnabled?palette.maalta:'#B8B8D2'}
                    value={isEnabled}
                    // backgroundColor={palette.maalta}
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                />
                <Text style={{...Styles.lbl}}>最新公告</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',paddingTop:HP(4)}}>
                <Switch
                    trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                    thumbColor={isEnabled?palette.maalta:'#B8B8D2'}
                    value={isEnabled}
                    // backgroundColor={palette.maalta}
                    onValueChange={()=>setIsEnabled(!isEnabled)}
                />
                <Text style={{...Styles.lbl}}>講座</Text>
                </View>
            </View>
        </View>
    )
}
export default SystemPush;