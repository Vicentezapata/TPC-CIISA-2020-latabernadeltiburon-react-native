import {StyleSheet,PixelRatio} from 'react-native';
import { Constants } from 'expo';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

var FONT_BODY   = 12;
var ICON_SIZE   = 30;
var FONT_HEADER   = 18;
var statusBarHeight ='20%';
console.log("Ratio pixel:"+PixelRatio.get())
if (PixelRatio.get() <= 2) {
  FONT_BODY = 10;
  ICON_SIZE   = 20;
  FONT_HEADER   = 13;
}


//LOGIN
export const Sizes={
  icon:ICON_SIZE,
  statusBarHeight:statusBarHeight,
  fontBase:FONT_BODY,
  fontHeader:FONT_HEADER,
}
//Stilo principal 
export const Colors = {    
    darkPrimary:'#689F38',
    primary:'#8BC34A',
    lightPrimary:'#DCEDC8',
    textPrimary:'#212121',
    accent:'#CDDC39',
    primaryText:'#212121',
    secondaryText:'#757575',
    divider: '#BDBDBD'
}
 
const baseContainerStyles = {                                
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
};
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ddd',
      alignItems: 'center',
      justifyContent: 'center',
      //paddingTop: Constants.statusBarHeight,
    },

    containerCard: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerCardLogin: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.primary,
    },
    containerCardList: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: Colors.lightPrimary,
    },

    loginContainer: {
        /*flex: baseContainerStyles.flex,
        backgroundColor: Colors.dark,*/
    },
    index2:{
      position: 'absolute',
      zIndex: 2
    },index1:{
      position: 'absolute',
      zIndex: 1
    },
    paragraph: {
        fontSize: FONT_BODY,
        textAlign: 'center',
        color: '#000000',
      },  
    responseSend: {
        fontSize: FONT_HEADER,
        textAlign: 'center',
        color: '#000000',
      },  
      label: {
        fontSize: FONT_BODY
      },
      iconSize: {
        fontSize: FONT_BODY
      },
      image: { width: 300, height: 300, backgroundColor: 'gray' },
      button: {
        padding: 13,
        margin: 15,
        backgroundColor: '#dddddd',
      },
      containerAvatar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:'2%'
      },
      checkRow: {
        flexDirection: 'row'
      },
      row: {
        flexDirection: 'row',
        height:'100%'
      },
      row1_2: {
        flexDirection: 'row',
        height:'40%'
      },
      row2_2: {
        flexDirection: 'row',
        height:'60%'
      },
      welcome: {
          fontSize: 30
      },
      IndicatorIcon:{
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: "#CED0CE"    
      },
      modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        marginTop:"5%",
        marginBottom:"5%"
      },
      modalContentSendJson: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        marginTop:"5%",
        marginBottom:"5%"
      },
      mainAvatar: {
        marginTop: hp('8%'),
        marginBottom: hp('2%'),
      },
      
      container2: {
        flex: 1,
        alignItems: 'center',
        paddingTop: hp('30%'),
      },

      text: {
        fontSize: 21,
      },
      imgDoc:{
      //  width:'90%',
       // height:'90%',
        margin:'5%',
      }
  });