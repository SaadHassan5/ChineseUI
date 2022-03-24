import React, { useState } from 'react';
import { Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { HelpStyles as Styles } from './help-style';

const HelpCenter = (props) => {
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'幫助中心'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(3) }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={{ ...Styles.pointTxt }}>1. 積分可以換回現金嗎?</Text>
                    <TouchableOpacity onPress={() => setShow(!show)} style={{ padding: WP(2) }}>
                        {show ?
                            <SVGS.upArrow />
                            :
                            <SVGS.downArrow />
                        }
                    </TouchableOpacity>
                </View>
                {show &&
                <Text style={{...Styles.pointTxt,fontFamily:fontFamily.regular,width:'100%',color:'#707070',paddingVertical:HP(1)}}>不可以。撲克領域的積分僅供實戰檢定課程之檢定考核依據，並無任何現金價值。若有會員將此積分作為個人不當營利之目的，本公司將開除該會員會籍，並保留法律相關訴訟權利。
                </Text>}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingTop:HP(4) }}>
                    <Text style={{ ...Styles.pointTxt }}> 2.如何取消或更動已預約的教練課程?</Text>
                    <TouchableOpacity onPress={() => setShow1(!show1)} style={{ padding: WP(2) }}>
                        {show1 ?
                            <SVGS.upArrow />
                            :
                            <SVGS.downArrow />
                        }
                    </TouchableOpacity>
                </View>
                {show1 &&
                <Text style={{...Styles.pointTxt,fontFamily:fontFamily.regular,width:'100%',color:'#707070',paddingVertical:HP(1)}}>不可以。撲克領域的積分僅供實戰檢定課程之檢定考核依據，並無任何現金價值。若有會員將此積分作為個人不當營利之目的，本公司將開除該會員會籍，並保留法律相關訴訟權利。
                </Text>}
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',paddingTop:HP(4) }}>
                    <Text style={{ ...Styles.pointTxt }}>3.為何我預約的課程被取消?</Text>
                    <TouchableOpacity onPress={() => setShow2(!show2)} style={{ padding: WP(2) }}>
                        {show2 ?
                            <SVGS.upArrow />
                            :
                            <SVGS.downArrow />
                        }
                    </TouchableOpacity>
                </View>
                {show2 &&
                <Text style={{...Styles.pointTxt,fontFamily:fontFamily.regular,width:'100%',color:'#707070',paddingVertical:HP(1)}}>不可以。撲克領域的積分僅供實戰檢定課程之檢定考核依據，並無任何現金價值。若有會員將此積分作為個人不當營利之目的，本公司將開除該會員會籍，並保留法律相關訴訟權利。
                </Text>}
            </View>
        </View>
    )
}
export default HelpCenter;