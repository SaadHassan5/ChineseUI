import React, { useEffect, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View, } from 'react-native';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { NewsStyle as Styles } from './news-style';

const DetailNews = (props) => {
    const [data,setData] = useState(props.route.params.obj)
    useEffect(()=>{
        console.log(props.route.params.obj);
    },[])
    return (
        <View style={{ ...Styles.container }}>
            <ScrollView>
            <CustomHeader txt={'最新公告'} props={props} />
            <View style={{ ...Styles.whiteView, paddingTop: HP(3),paddingHorizontal:WP(8) }}>
                <Image resizeMode='stretch' source={data.img} style={{width: WP(85),alignSelf:"center",height:HP(25)}}/>
                <Text style={{...Styles.titleTxt,fontSize:18}}>{data.title}</Text>
                <Text style={{...Styles.dateTxt}}>{data.date}</Text>
                <Text style={{fontSize:14,fontFamily:fontFamily.regular,lineHeight:21,color:palette.black}}>{data.details}</Text>
            </View>
            </ScrollView>
        </View>
    )
}
export default DetailNews;