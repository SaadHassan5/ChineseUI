import React from 'react';
import { Image, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { MailStyles as Styles } from './mail-style';

const Mailbox = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'我的信箱'} props={props} />
            <View style={{ ...Styles.whiteView,  }}>
                {CONST.mail.map((item, i) =>
                    <TouchableOpacity key={i} onPress={()=>props.navigation.navigate('MailContent',{obj:item})} style={{ backgroundColor:item.read?'':'#FFE9E9',flexDirection: 'row', alignItems: 'center',paddingHorizontal:WP(5),paddingTop: HP(3)}}>
                        <Image source={item.img} style={{ ...Styles.img }} />
                        <View style={{marginLeft:WP(5),borderBottomWidth:1,width: WP(60),borderColor:palette.lighBlueBtn,paddingVertical:HP(1)}}>
                            <Text style={{ ...Styles.titleTxt }}>{item.title}</Text>
                            <Text style={{ ...Styles.dateTxt }}>{item.dateTime}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}
export default Mailbox;