import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CustomHeader } from '../../assets/components/CustomHeader/CustomHeader';
import { VerifyModal } from '../../assets/components/VerifyModal/VerifyModal';
import { palette } from '../../assets/config/colors';
import fontFamily from '../../assets/config/fontFamily';
import { HP, WP } from '../../assets/config/screen-ratio';
import { SVGS } from '../../assets/img';
import { AgreementStyle as Styles } from './Agreement-Style';

const UserAgreement = (props) => {
    const [isVerify, setIsVerify] = useState(false);
    const [data, setData] = useState(`在此特別提醒使用者認真閱讀、充分理解以下《用戶協議》中各條款。請用戶審慎閱讀並選擇接受或不接受本協議。 撲克領域有權修訂本協議，更新後的合約條款將公佈於最新消息，自修訂協定聲明的生效之日起生效。

    1. 使用本應用程式的用戶需要註冊成為撲克領域會員，用戶對撲克領域帳號的註冊、使用行為需遵守此使用協議。
    
    2. 本協議是撲克領域與會員之間關於使用撲克領域相關服務所訂立的協議。
    
    3. 本應用程式給予會員一項個人的、不可轉讓、不可轉授權的許可。
    
    4. 如果需要進行商業性的銷售、複製和散發，必須獲得撲克領域的授權和許可。
    
    5. 為了改善會員用戶體驗、完善服務內容，撲克領域有權不時地為用戶提供本應用程式替換、修改、升級版本。 新版本應用程式發佈後，不保證舊版本可繼續使用。
    
    6. 嚴禁會員對本應用程式進行反向工程，如反彙編、反編譯或者其他試圖獲得本應用程式的原始程式碼。
    
    7. 撲克領域以目前的技術提供服務支援，不保證本應用程式在操作上不會中斷或沒有錯誤，不保證會糾正本應用程式服務的所有缺陷，亦不保證本應用程式服務能滿足用戶的所有要求。 由此產生的後果，撲克領域不承擔任何責任。
    
    8. 除法律法規有明確規定外，撲克領域將盡最大努力確保應用程式及其所涉及的技術及資訊安全、有效、準確、可靠，但受限於現有技術，用戶理解撲克領域不能對此進行擔保。
    
    9. 撲克領域是本應用程式的智慧財產權權利人。 本應用程式的一切著作權、商標權、專利權、營業秘密等智慧財產權，以及與本應用程式相關的所有資訊內容均受當地法律法規和相應的國際條約保護，撲克領域享有上述智慧財產權。
    
    10. 撲克領域有權在必要時修改本協議條款，協議條款一旦發生變動，將會在相關頁面上公佈修改後的協議條款。 如果不同意所改動的內容，用戶應主動取消此項服務。 如果用戶繼續使用服務，則視為接受協議條款的變動。
    11. 用戶與撲克領域一致同意凡因本服務所產生的糾紛雙方應協商解決，協商不成任何一方可提交本協議簽訂地有管轄權的法院訴訟解決。
    `)
    return (
        <View style={{ ...Styles.container }}>
            <CustomHeader txt={'註冊新會員'} props={props} />
            <View style={{ ...Styles.whiteView }}>
                <ScrollView>
                    <Text style={{...Styles.titleTxt}}>撲克領域會員用戶協議</Text>
                    <View style={{marginHorizontal:WP(8)}}>
                <Text style={{...Styles.txt}}>{data}</Text>
                </View>
                </ScrollView>
            </View>
            <View style={{backgroundColor:palette.white,flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>setIsVerify(true)} style={{borderWidth:1,borderColor:palette.maalta,width:WP(22)}}>
                        <Text style={{fontSize:11,fontFamily:fontFamily.regular,paddingVertical:HP(.5),textAlign:'center',color:palette.maalta}}>不接受此協議</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>props.navigation.navigate('TabNavigator')} style={{borderWidth:1,borderColor:palette.maalta,backgroundColor:palette.maalta,marginLeft:WP(5),width:WP(22)}}>
                        <Text style={{fontSize:11,fontFamily:fontFamily.regular,textAlign:'center',color:palette.white,paddingVertical:HP(.5)}}>接受此協議</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <VerifyModal txt1={'執行被拒'} txt2={`您必須同意使用條款方能使用本APP，若您要繼續使用，請回到用戶協議重新執行。`} isVerify={isVerify} setIsVerify={setIsVerify} nav={()=>{setIsVerify(false)}} />
        </View>
    )
}
export default UserAgreement;