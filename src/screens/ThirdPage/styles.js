import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles= StyleSheet.create({

container:{marginTop: 20,
	height:500,width:Dimensions.get('screen').width,
},

top:{	height:100,width:Dimensions.get('screen').width,justifyContent:'center',alignItems:'center',

},
intop:{
height:100,width:Dimensions.get('screen').width-50,flexDirection: 'column',justifyContent:'space-evenly',
},




jyc:{fontSize: 22,fontFamily: theme.font.fontSemiBold,

},
access:{
fontSize: 15,fontFamily: theme.font.fontRegular,
},








mid:{height:280,width:Dimensions.get('screen').width,justifyContent:'center',alignItems:'center',

},

inmid:{height:260,width:Dimensions.get('screen').width-50,justifyContent:'center'

},




loginhere:{flexDirection: 'row',

},
aj:{
fontSize: 13,fontFamily: theme.font.fontRegular,
},
login:{
fontSize: 14,fontFamily: theme.font.fontSemiBold,textTransform:'uppercase',color:'#fc8019'

},









bottom:{
	height:100,width:Dimensions.get('screen').width,flexDirection: 'column',justifyContent:'space-evenly',alignItems:'center',
},


lineargradient:{
  width:Dimensions.get('screen').width-50,height:40,justifyContent:'center',alignItems:'center',borderRadius:6,
},
email:{
  fontSize: 15,fontFamily: theme.font.fontSemiBold,color:'white',letterSpacing:0,
},
agree:{fontSize: 11,fontFamily: theme.font.fontRegular,

},
terms:{fontSize: 11,fontFamily: theme.font.fontRegular,

},



});


export default styles;