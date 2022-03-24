import React from 'react';
import { TouchableOpacity, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { NewStyle as Styles} from './new-style';

const NewMember = (props) => {
    return (
        <View style={{...Styles}}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{ position: 'absolute', left: WP(8), top: HP(4) }}>
                    <SVGS.backArrow />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default NewMember;