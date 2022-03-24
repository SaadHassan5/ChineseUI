import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { RedBlack } from '../../assets/components/RedBlack/RedBlack';
import { palette } from '../../assets/config/colors';
import { CONST } from '../../assets/config/constants';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { AboutStyle as Styles } from './about-style';

const About = (props) => {
    return (
        <View style={{ ...Styles.container }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', left: WP(8), top: HP(4) }}>
                <TouchableOpacity onPress={() => props.navigation.goBack()} style={{}}>
                    <SVGS.backArrow />
                </TouchableOpacity>
                <Text style={{ ...Styles.headerTxt }}>關於撲克領域</Text>
            </View>
            <View style={{ ...Styles.whiteView }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ScrollView horizontal>
                        {CONST.pokerField.map((item, i) =>
                            <View>
                                <Image resizeMode={'stretch'} source={item.img} style={{ width: WP(80), height: HP(23), marginLeft: WP(5) }} />
                            </View>
                        )}
                    </ScrollView>
                </View>
                <Text style={{ ...Styles.titleTxt }}>用科學的方法， 把每一手牌打出最大價值</Text>
                <Text>
                    撲克領域，是一座以「學習推廣」以及「休閒娛樂」為導向的德州撲克競技館。我們採用會員制，提供專業的教學品質與舒適的場館環境。

                    不同於坊間高價位的德州撲克課程，撲克領域提供最優惠的平價教學，有效提升專業技能。會員享有每日免費競賽輕鬆練習、無痛升級。

                    我們獨家專利設計，課程教練遴選公開透明，以會員認同的專業師資，建立創新的自由訓練模式。透過與教練、指導員們同桌練習，多方交流、有效溝通、相互啟發，從而達到共享、共進，實現撲克領域「教」、「學」相長的核心理念，也讓有興趣往德州撲克職業圈發展的莘莘學子，有更明確的方向，得到更實質的幫助。

                    撲克領域志在創造台灣健全的德州撲克職業平台，讓「職業牌手」、「德州撲克教練」成為受人尊重的職業，完善投入穩定的報酬贊助，參與國際大型賽事，讓台灣的職業德州撲克選手，揚名國際。
                </Text>
            </View>
        </View>
    )
}
export default About;