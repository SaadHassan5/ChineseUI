import React, { useEffect } from 'react';
import { View, } from 'react-native';
import { palette } from '../../assets/config/colors';

const MailContent =(props)=>{
    useEffect(()=>{
        console.log('ee');
    },[])
    return(
        <View style={{flex:1,backgroundColor:palette.white}}>
            
        </View>
    )
}
export default MailContent;