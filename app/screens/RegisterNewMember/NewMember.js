import React, { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { ProfileModal } from '../../assets/components/ProfileModal/ProfileModal';
import { RedButton } from '../../assets/components/RedButton/RedButton';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES, SVGS } from '../../assets/img';
import { NewStyle as Styles } from './new-style';

const NewMember = (props) => {
    const [eye, setEye] = useState(true);
    const [eye1, setEye1] = useState(true);
    const [isModal, setIsModal] = useState(false);
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'註冊新會員'} props={props} />
            <View style={{ ...Styles.whiteView }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-end', alignSelf: 'center', marginTop: HP(2) }}>
                        <Image style={{ ...Styles.dp }} source={IMAGES.dp} />
                        <SVGS.camera style={{ marginLeft: -WP(8) }} />
                    </View>
                    <View style={{ paddingHorizontal: WP(8), paddingTop: HP(4) }}>
                        <Text style={{ ...Styles.lbl }}>姓名</Text>
                        <TextInput placeholder='Name' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>暱稱</Text>
                        <TextInput placeholder='Nickname' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>電話</Text>
                        <TextInput keyboardType={'phone-pad'} placeholder='Telephone' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>Email</Text>
                        <TextInput keyboardType={'email-address'} placeholder='demo@gmail.com' placeholderTextColor={'#38385E'} style={{ ...Styles.inp }} />
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>密碼</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput textContentType={'password'} secureTextEntry={eye} placeholder='Password' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%' }} />
                            <TouchableOpacity onPress={() => setEye(!eye)} style={{ position: 'absolute', right: WP(5) }}>
                                {eye ?
                                    <SVGS.greyEye />
                                    :
                                    <SVGS.greyEyeSlash />
                                }
                            </TouchableOpacity>
                        </View>
                        <Text style={{ ...Styles.lbl, marginTop: HP(1.5) }}>請再次確認密碼</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TextInput textContentType={'password'} secureTextEntry={eye1} placeholder='Confirm Password' placeholderTextColor={'#38385E'} style={{ ...Styles.inp, width: '100%' }} />
                            <TouchableOpacity onPress={()=>setEye1(!eye1)} style={{ position: 'absolute', right: WP(5) }}>
                                {eye1?
                                    <SVGS.greyEye />
                                    :
                                    <SVGS.greyEyeSlash/>
                                }
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ paddingTop: HP(2) }}>
                        <RedButton txt={'註冊'} nav={()=>setIsModal(true)}/>
                        {/* props.navigation.navigate('UserAgreement') */}
                    </View>
                </ScrollView>
            </View>
            <ProfileModal isVerify={isModal} setIsVerify={setIsModal} nav={()=>{props.navigation.navigate('UserAgreement');setIsModal(false)}}/>
        </View>
    )
}
export default NewMember;