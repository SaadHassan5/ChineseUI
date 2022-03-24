import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { SystemStyles as Styles } from './system-style';

const SystemPush = (props) => {
    const [isMail, setIsMail] = useState(true);
    const [isArena, setIsArena] = useState(true);
    const [isAnounce, setIsAnounce] = useState(false);
    const [isLecture, setIsLecture] = useState(false);
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'優惠券'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(4) }}>
                    <Switch
                        trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                        thumbColor={isMail ? palette.maalta : '#B8B8D2'}
                        value={isMail}
                        // backgroundColor={palette.maalta}
                        onValueChange={() => setIsMail(!isMail)}
                    />
                    <Text style={{ ...Styles.lbl }}>我的信箱</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(4) }}>
                    <Switch
                        trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                        thumbColor={isArena ? palette.maalta : '#B8B8D2'}
                        value={isArena}
                        // backgroundColor={palette.maalta}
                        onValueChange={() => setIsArena(!isArena)}
                    />
                    <Text style={{ ...Styles.lbl }}>競技館賽事</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(4) }}>
                    <Switch
                        trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                        thumbColor={isAnounce ? palette.maalta : '#B8B8D2'}
                        value={isAnounce}
                        // backgroundColor={palette.maalta}
                        onValueChange={() => setIsAnounce(!isAnounce)}
                    />
                    <Text style={{ ...Styles.lbl }}>最新公告</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: HP(4) }}>
                    <Switch
                        trackColor={{ false: palette.lighterGrey, true: palette.maalta }}
                        thumbColor={isLecture ? palette.maalta : '#B8B8D2'}
                        value={isLecture}
                        // backgroundColor={palette.maalta}
                        onValueChange={() => setIsLecture(!isLecture)}
                    />
                    <Text style={{ ...Styles.lbl }}>講座</Text>
                </View>
            </View>
        </View>
    )
}
export default SystemPush;