import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex:1,
  },


 
products:{
  justifyContent:'center',alignItems:'center',
},
inproducts:{
  width:Dimensions.get('screen').width-50,height:'auto',
},



main:{width:'100%',height:300,borderBottomColor: '#c4c4c4',borderBottomWidth:3,
flexDirection: 'column',justifyContent:'space-evenly'

},


heading:{fontFamily: theme.font.fontSemiBold,fontSize: 20,

},

type:{
fontFamily: theme.font.fontMedium,fontSize: 18,marginTop: -15,
},
address:{
fontFamily: theme.font.fontRegular,fontSize: 15,width:'80%',marginTop:-10,
},


jobdetails:{color: '#fc8019',fontFamily: theme.font.fontSemiBold,fontSize: 16,

},
salary:{
fontFamily: theme.font.fontSemiBold,fontSize: 16,
},
amount:{fontFamily: theme.font.fontMedium,fontSize: 13,marginTop: -15,

},


jobtype:{fontFamily: theme.font.fontSemiBold,fontSize: 15,

},
fulltime:{fontFamily: theme.font.fontMedium,fontSize: 13,marginTop: -3,

},



 
box:{
  justifyContent:'center',alignItems:'center',marginTop: 10,marginBottom: 20,
},
inbox:{
  width:Dimensions.get('screen').width-50,height:300,
  flexDirection: 'column',justifyContent:'space-evenly',
},







jobdescription:{
  fontFamily: theme.font.fontSemiBold,fontSize: 18,color:'#fc8019'

},
description:{
  fontFamily: theme.font.fontMedium,fontSize: 13,
},



duties:{marginTop: 19,
  fontFamily: theme.font.fontSemiBold,fontSize: 15,
},
documents:{marginTop: 30,
  fontFamily: theme.font.fontSemiBold,fontSize: 15,
},
applybtn:{
width:'100%',height:40,justifyContent:'center',alignItems:'center',backgroundColor: "#fc8019",borderRadius:6
},
applynow:{
  fontFamily: theme.font.fontSemiBold,fontSize: 15,color:'white',
},
skills:{
  fontFamily: theme.font.fontSemiBold,fontSize: 15,marginTop: 19,
}









});

export default styles;
