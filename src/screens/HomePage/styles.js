import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  
  },


 
images:{   
        height:"100%",width:'100%',resizeMode:'cover',borderRadius:15,

},


imgbox:{
      marginTop: 20,
         flexDirection: 'row',borderRadius: 15,
         width:280,height:150,marginLeft: 10,borderColor: '#000000',borderWidth: 0.8,
         justifyContent:'center',alignItems:'center',
 
},
innerbox:{ 


},

circleimages:{justifyContent:'center',alignItems:'center',

},


fourboxes:{
  flexDirection: 'row',flexWrap:'wrap',width:Dimensions.get('window').width-60,height:'auto',
justifyContent:'center',alignItems:'center',
},
services:{

    fontSize: 18,
    fontFamily: theme.font.fontSemiBold,color:'black',textTransform:'uppercase',letterSpacing:1.2,

},
line:{width:'35%',height:2,backgroundColor:'#fc8019',top:-5,

},

box:{flexDirection: 'row',flexWrap:'wrap',height:205,
},
fourimages:{
  flexDirection: 'column',justifyContent:'center',alignItems:'center',width:'50%',height:'auto',
},
image2:{
  width:'97%',height:'97%',borderRadius:50,borderColor:'white',borderWidth:1.5,
},
lineargradient:{

  width:'63%',height:'63%',borderRadius:50,borderColor:'white',borderWidth:1.5,justifyContent:'center',alignItems:'center',
},
servicestext:{
    fontSize: 12,
    fontFamily: theme.font.fontSemiBold,color:'black',textTransform:'uppercase',letterSpacing:1.2,

}


});

export default styles;
