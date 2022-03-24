import React from 'react';
import { Image, View, } from 'react-native';
import { palette } from '../../assets/config/colors';
import { IMAGES } from '../../assets/img';
import { HomeStyle as Styles} from './home-style';

const Home =(props)=>{
    return(
        <View style={{flex:1,backgroundColor:palette.maalta}}>
         <Image source={IMAGES.dp} style={{...Styles.dp}}/>
        </View>
    )
}
export default Home;