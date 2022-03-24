import React from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { SettingStyles as Styles} from './setting-style';

const AccountSetting =(props)=>{
    return(
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>優惠券條碼</Text>
            </View>
            <View style={{...Styles.whiteView,paddingTop:HP(3)}}>
            <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'center', marginTop: HP(2) }}>
                        <Image style={{ ...Styles.dp }} source={IMAGES.dp} />
                        <SVGS.camera style={{ marginLeft: -WP(8) }} />
                    </View>
                    <View style={{ paddingHorizontal: WP(8), paddingTop: HP(4) }}>
                        <Text style={{ ...Styles.lbl }}>姓名</Text>
                        <TextInput editable={false} placeholder='Name' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text editable={false} style={{ ...Styles.lbl, marginTop: HP(1.5) }}>ID</Text>
                        <TextInput editable={false} placeholder='ID' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>我的點數</Text>
                        <TextInput  placeholder='345643' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>Email</Text>
                        <TextInput keyboardType={'email-address'} placeholder='demo@gmail.com' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>密碼</Text>
                        
                    </View>
                    <View style={{ paddingTop: HP(2) }}>
                        <RedButton txt={'註冊'} nav={()=>props.navigation.navigate('UserAgreement')}/>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default AccountSetting;