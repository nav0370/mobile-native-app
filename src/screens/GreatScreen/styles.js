import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles= StyleSheet.create({

container:{marginTop: 20,
  height:500,width:Dimensions.get('screen').width,
},

top:{ height:100,width:Dimensions.get('screen').width,justifyContent:'center',alignItems:'center',

},
intop:{
height:100,width:Dimensions.get('screen').width-50,flexDirection: 'column',justifyContent:'space-evenly',
},

welcome:{
flexDirection: 'row',
},


jyc:{fontSize: 20,fontFamily: theme.font.fontSemiBold,color:'black',

},
access:{
fontSize: 17,fontFamily: theme.font.fontSemiBold,
color:'black',top:-5,
},

pickerHeading:{
  fontSize: 17,
  fontFamily: theme.font.fontSemiBold,
  color:'black',
  padding: 0,
  },

  pickerDropdown:{
    width: 250,
    height: 50,
  },






mid:{height:80,width:Dimensions.get('window').width,

},

inmid:{height:170,width:Dimensions.get('screen').width-50,flexDirection: 'column',justifyContent:'space-evenly',

},

otp:{
fontSize: 14,fontFamily:theme.font.fontRegular,
},

otpsent:{
fontSize: 14,fontFamily:theme.font.fontRegular,
},


loginhere:{flexDirection: 'row',justifyContent:'space-between',width:Dimensions.get('screen').width-60,

},
aj:{
fontSize: 13,fontFamily: theme.font.fontRegular,
},
login:{
fontSize: 14,fontFamily: theme.font.fontRegular,color:'#FFB71B',

},









bottom:{
  height:100,width:Dimensions.get('screen').width,alignItems:'center',
},


lineargradient:{
  width:Dimensions.get('screen').width-50,height:40,justifyContent:'center',alignItems:'center',borderRadius:6,
},
email:{
  fontSize: 18,fontFamily: theme.font.fontSemiBold,color:'white',letterSpacing:0,
},
agree:{fontSize: 11,fontFamily: theme.font.fontRegular,

},
terms:{fontSize: 11,fontFamily: theme.font.fontRegular,

},



});


export default styles;