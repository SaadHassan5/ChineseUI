import React from 'react';
import { Image, Text, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { HP, WP } from '../../assets/config/screen-ratio';
import { IMAGES } from '../../assets/img';
import { HomeStyle as Styles } from './home-style';

const Home = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={IMAGES.dp} style={{ ...Styles.dp }} />
                <View>
                    <Text style={{width:WP(25),borderRadius:WP(3),paddingVertical:HP(1),backgroundColor: palette.white,textAlign:'center',color:palette.maalta}}>-</Text>
                </View>
            </View>
        </View>
    )
}
export default Home;