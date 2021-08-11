import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flex:1,
  
  },
searchshops:{height: 'auto',width:Dimensions.get('screen').width, 
justifyContent: 'center',marginTop: 10,
alignItems: 'center',
},

contents:{

width:Dimensions.get('screen').width-20,height:'auto',


},

searchbar:{
justifyContent:'center',alignItems:'center',
},



types:{
  height:50,width:'auto',justifyContent:'center',alignItems:'center',flexDirection: 'row',justifyContent:'space-evenly',
},
top:{marginRight: 10,
 width:'auto',height:30, paddingHorizontal: 9,paddingVertical: 2,borderWidth: 1,borderColor: '#c4c4c4',borderRadius:7,justifyContent:'center',alignItems:'center',
},

remote:{fontFamily: theme.font.fontRegular,textAlign: 'center',

},
date:{fontFamily: theme.font.fontRegular,

},
job:{fontFamily: theme.font.fontRegular,

},
pagenumbers:{justifyContent:'center',alignItems:'center',
},
pages:{width:Dimensions.get('screen').width-73,fontSize: 13,
  
},







products:{justifyContent:'center',alignItems:'center',marginBottom: 30,

},

inproducts:{flexDirection: 'row',justifyContent:'space-between',alignItems:'center',width:Dimensions.get('screen').width-70,height:'auto',
borderTopWidth: 0.5,borderTopColor: '#000000',marginTop: 10,
},
left:{width:'72%',height:230,marginTop: 15,

},
right:{width:'38%',height:230,marginTop: 15,

},


heading:{
  fontSize: 17,fontFamily: theme.font.fontSemiBold,
},
type:{

  fontSize: 15,fontFamily: theme.font.fontMedium,
},
amount:{marginTop: 4,
  height:'auto',width:130,padding:5,backgroundColor:'#c4c4c4',
  fontSize: 14,fontFamily: theme.font.fontSemiBold,marginTop: 5
},
address:{
  fontSize: 15,
},
apply:{
  fontSize: 13,fontFamily: theme.font.fontRegular,

},
urgent:{
  fontSize: 13,fontFamily: theme.font.fontRegular,

},

icons:{
  flexDirection: 'column',justifyContent:'flex-end',alignItems:'center'
}

});

export default styles;
