import React from 'react';
import { Image, ScrollView, Share, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { ShipStyles as Styles } from './ship-style';

const Membership = (props) => {
    
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Poker | Get you membership now.',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
        
    }

    return (
        <View style={{ ...Styles.container }}>
            <Image source={IMAGES.membershipBack} style={{ width: '100%', height: '100%', position: 'absolute', }} />
            <ScrollView>
                {/* <Text style={{fontSize:40,color:'white'}}>saad</Text> */}
                <CustomHeader txt={'我的會籍'} props={props} />
                <View style={{ marginTop: HP(18) }}>
                    <Text style={{ ...Styles.daysTxt }}>1234</Text>
                    <Text style={{ ...Styles.fieldTxt }}>領域展開天數</Text>
                </View>
                <View style={{ marginTop: HP(12) }}>
                    <View style={{ ...Styles.joinView }}>
                        <Text style={{ ...Styles.joinTxt }}>入會日期：2022-01-01</Text>
                    </View>
                    <View style={{ ...Styles.joinView }}>
                        <Text style={{ ...Styles.joinTxt }}>會籍長度：一個月</Text>
                    </View>
                    <View style={{ ...Styles.joinView }}>
                        <Text style={{ ...Styles.joinTxt }}>會籍到期日：2022-02-01</Text>
                    </View>
                    <View style={{ marginTop: HP(3) }}>
                        <RedButton nav={()=>onShare()}  txt={'去分享'} />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
export default Membership