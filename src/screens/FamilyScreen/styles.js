import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({




scroll:{
  justifyContent:'center',alignItems:'center',

},





inheader:{
   width:Dimensions.get('screen').width-50,height:50,justifyContent:'center',
}
,
heading:{

 
   width:Dimensions.get('screen').width-50,height:90,justifyContent:'flex-start',
},
inheading:{
},
great:{
  fontSize: 20,fontFamily: theme.font.fontSemiBold,color:'#fc8019',
},
family:{fontSize:17,fontFamily: theme.font.fontSemiBold,

},




inputboxes:{

   width:Dimensions.get('screen').width-50,height:'auto',flex: 1,
},
inputbox:{
  borderRadius:5,fontFamily:theme.font.fontRegular,backgroundColor: 'white',fontSize: 14,marginTop: 10,marginBottom: 10,
},


nextbutton:{
marginTop: 20,marginBottom: 20,

   width:Dimensions.get('screen').width-50,height:45,backgroundColor: "#fc8019",justifyContent:'center',alignItems:'center'

},
nexttext:{
  fontSize: 20,fontFamily: theme.font.fontMedium,color:'white',
}





});

export default styles;
