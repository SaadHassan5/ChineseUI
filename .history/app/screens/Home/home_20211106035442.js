import React from 'react';
import { Image, Text, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { WP } from '../../assets/config/screen-ratio';
import { IMAGES } from '../../assets/img';
import { HomeStyle as Styles } from './home-style';

const Home = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={IMAGES.dp} style={{ ...Styles.dp }} />
                <View>
                    <Text style={{paddingHorizontal:WP(10),borderRadius:WP(5),backgroundColor: palette.white,}}>-</Text>
                </View>
            </View>
        </View>
    )
}
export default Home;