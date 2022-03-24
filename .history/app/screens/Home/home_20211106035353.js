import React from 'react';
import { Image, Text, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { IMAGES } from '../../assets/img';
import { HomeStyle as Styles } from './home-style';

const Home = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: palette.maalta }}>
            <View style={{flexDirection:'row',alignItems:'center'}}>
                <Image source={IMAGES.dp} style={{ ...Styles.dp }} />
                <View>
                    <Text style={{padding:5}}>-</Text>
                </View>
            </View>
        </View>
    )
}
export default Home;