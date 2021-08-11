import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container:{
   flex:1,

  },
  header:{

   justifyContent:'center',alignItems:'center',

  },

  inheader:{


    flexDirection: 'row',width:Dimensions.get('screen').width-50,height:130,justifyContent:'space-between',

  },
buttons:{top:15,

  flexDirection: 'column',justifyContent:'space-evenly',paddingVertical:2,paddingHorizontal: 10, borderWidth:0.5,borderColor:'black',borderRadius:10,

},
hirebtn:{
  padding:10,borderColor:'#fc8019',borderWidth:1,borderRadius:5,
},

workbtn:{
  padding:10,borderColor:'#fc8019',borderWidth:1,borderRadius:5,

},








animationbox:{

justifyContent:'center',alignItems:'center',position:'relative',


},





inanimationbox:{width:Dimensions.get('screen').width-85,height:360,

  flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center',

},



leftanimation:{top:23,
justifyContent:'center',alignItems:'center',
},


rightanimation:{
justifyContent:'center',alignItems:'center',
},

rightbody:{
flexDirection: 'row',justifyContent:'center',alignItems:"center",
},



 







lastbuttons:{justifyContent:'center',alignItems:'center',height:100,


},
inlastbuttons:{
width:Dimensions.get('screen').width-50,height:50,
justifyContent:'center',alignItems:'center',position:'relative',

},
hirecontinue:{
  width:'100%',height:50,backgroundColor:'#fc8019',justifyContent:'center',alignItems:'center',borderRadius:10,
},
workcontinue:{
  width:'100%',height:50,backgroundColor:'#fc8019',justifyContent:'center',alignItems:'center',borderRadius:10,
},
continue:{
  fontFamily: theme.font.fontBold,color:'white',textTransform:'uppercase',letterSpacing:1,textAlign: 'center',
},













animatedbuttons:{width:'100%',position:'absolute',zIndex: 1,height:170,top:80,
},
wantohiretext:{width:'60%',height:100,
  fontFamily: theme.font.fontMedium,fontSize: 18,textTransform:'uppercase',
},
rotatework:{
  left:-20,
}










});

export default styles;
