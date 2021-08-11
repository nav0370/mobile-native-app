import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({

container:{flex:1,
  justifyContent:'center',alignItems:'center',
},
animationlogo:{
height:Dimensions.get('screen').height-400,width:Dimensions.get('screen').width,flexDirection: 'column', justifyContent:'space-evenly',alignItems:'center',



},




down:{
  flexDirection: 'row',justifyContent:'center',alignItems:'center',top:-17,
},
pareek:{
fontSize: 34,fontFamily: theme.font.fontSemiBold,color:'#C72F00',
},
samaj:{

fontSize: 34,fontFamily: theme.font.fontSemiBold,color:'#C72F00',
},


medal:
  {
    height:45,width: 45,resizeMode: 'contain',top:-3,
  },



});

export default styles;
