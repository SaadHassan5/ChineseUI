import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { SettingStyles as Styles } from './setting-style';

const AccountSetting = (props) => {
    const [gender, setGender] = useState('male')
    const [eye, setEye] = useState(true)
    const [eye1, setEye1] = useState(true)
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'帳號設定'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <ScrollView contentContainerStyle={{ paddingBottom: HP(3) }}>
                    <View style={{ paddingHorizontal: WP(8), }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'center', marginTop: HP(2) }}>
                            <Image style={{ ...Styles.dp }} source={IMAGES.dp} />
                            <SVGS.camera style={{ marginLeft: -WP(8) }} />
                        </View>
                        <View style={{ paddingHorizontal: WP(4), paddingTop: HP(4) }}>
                            <Text style={{ ...Styles.lbl }}>姓名</Text>
                            <TextInput editable={false} placeholder='Saad Hassan' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                            <Text editable={false} style={{ ...Styles.lbl, marginTop: HP(1.5) }}>ID</Text>
                            <TextInput editable={false} placeholder='ID' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>我的點數</Text>
                            <TextInput editable={false} placeholder='345643' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>暱稱</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput editable={false} placeholder='Saadi' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity style={{ position: 'absolute', right: WP(5), }}>
                                    <SVGS.pen />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>國家或地區</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput editable={false} placeholder='台灣' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity style={{ position: 'absolute', right: WP(5), }}>
                                    <SVGS.pen />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>性別</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Checkbox status={gender == 'male' ? 'checked' : 'unchecked'} onPress={() => setGender(gender == 'male' ? '' : 'male')} color={palette.maalta} />
                                <Text style={{ ...Styles.check, marginRight: WP(3) }}>男</Text>
                                <Checkbox status={gender == 'female' ? 'checked' : 'unchecked'} color={palette.maalta} onPress={() => setGender(gender == 'female' ? '' : 'female')} />
                                <Text style={{ ...Styles.check }}>女</Text>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>Email</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput keyboardType={'email-address'} placeholder='demo@gmail.com' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity style={{ position: 'absolute', right: WP(5), }}>
                                    <SVGS.pen />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>電話號碼</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput keyboardType={'number-pad'} placeholder='0975-123456' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity style={{ position: 'absolute', right: WP(5), }}>
                                    <SVGS.pen />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>地址</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput placeholder='台中市北區三民路123號' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity style={{ position: 'absolute', right: WP(5), }}>
                                    <SVGS.pen />
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>更新密碼</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput secureTextEntry={eye} textContentType={'password'} placeholder='abcdefgh' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity onPress={() => setEye(!eye)} style={{ position: 'absolute', right: WP(5), }}>
                                    {eye ?
                                        <SVGS.greyEye />
                                        :
                                        <SVGS.greyEyeSlash />
                                    }
                                </TouchableOpacity>
                            </View>
                            <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>請再次確認新密碼</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <TextInput secureTextEntry={eye1} textContentType={'password'} placeholder='abcdefgh' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%', }} />
                                <TouchableOpacity onPress={() => setEye1(!eye1)} style={{ position: 'absolute', right: WP(5), }}>
                                    {eye1 ?
                                        <SVGS.greyEye />
                                        :
                                        <SVGS.greyEyeSlash />
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ paddingTop: HP(2) }}>
                            <RedButton txt={'更新'} nav={() => props.navigation.navigate('UserAgreement')} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}
export default AccountSetting;