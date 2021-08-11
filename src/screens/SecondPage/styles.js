import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";
const styles= StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'#FFFFFF',justifyContent:'center',alignItems:'center',
},

incontainer:{
  width: Dimensions.get('window').width,
  height:450,
},
top:{
  width: Dimensions.get('window').width,
height:150,justifyContent:'flex-end',alignItems:'center',
},

intop:{flexDirection: 'column',height:100,width:'100%',justifyContent:'space-around',alignItems:'center',
},


samajlogo:{
},
samajtext:{
  fontSize: 24, fontFamily: theme.font.fontRegular,color:'#fc8019',
},




mid:{
  width: Dimensions.get('window').width,
height:130,
},



inmid:{flexDirection: 'column',height:100,width:Dimensions.get('screen').width,justifyContent:'space-evenly',alignItems:'center',
},



joinyourcommunit:{fontSize: 25,fontFamily: theme.font.fontSemiBold,

},

account:{
  fontSize: 13,fontFamily: theme.font.fontRegular,
},
signup:{top:10,
  fontSize: 14,fontFamily: theme.font.fontSemiBold,textTransform:'uppercase',
},







bottom:{
  width: Dimensions.get('window').width,
height:130,justifyContent:'flex-start',alignItems:'flex-start',
},


inbottom:{flexDirection: 'column',height:130,width:Dimensions.get('screen').width,justifyContent:'space-around',alignItems:'center',
},



buttons:{
flexDirection: 'row',justifyContent:'space-evenly',alignItems:'flex-start',width:Dimensions.get('screen').width-30,
},


btn:{paddingVertical: 10,paddingHorizontal: 1,
  width:'40%',height:40,flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center',borderWidth:0.7,borderColor:'black',
},
socailimages:{
  width: 30,height: 30,resizeMode:'contain',
},


dashor:{
width:Dimensions.get('screen').width-60,height:40,flexDirection: 'row', justifyContent:'space-evenly',alignItems:'center',
},


leftline:{width:'40%',height:1,backgroundColor:'#fc8019',borderRadius:50,

},
rightline:{width:'40%',height:1,backgroundColor:'#fc8019',borderRadius:50,

},
or:{fontSize: 15,fontFamily: theme.font.fontRegular,

},
emailbtn:{

},
lineargradient:{
  width:Dimensions.get('screen').width-70,height:40,justifyContent:'center',alignItems:'center',borderRadius:6,
},
email:{
  fontSize: 15,fontFamily: theme.font.fontSemiBold,color:'white',letterSpacing:0,
}












});

export default styles;
