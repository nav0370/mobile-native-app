import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles= StyleSheet.create({

container:{flex:1,justifyContent: 'center',alignItems: 'center',
},
tickicon:{flexDirection: 'column',
	justifyContent: 'center',alignItems: 'center',width: '100%',height:500,
},
icons:
	{width:130,height:130,justifyContent:'center',alignItems:"center",borderRadius:130/2,borderWidth:5,borderColor:'#fc8019',
},
homebtn:{justifyContent:'flex-end',alignItems:'center',
	width:'90%'
},

gotohome:{width:'90%',height: 40,backgroundColor: "#fc8019",justifyContent:'center',borderRadius: 6, alignItems:'center'
}
,
hometext:{fontSize: 16,color:'white',fontFamily:theme.font.fontMedium,
},
  item: {
        position: 'absolute',
        width: 200,
        height: 200,borderWidth: 8,
        borderRadius:200/2,justifyContent:'center',alignItems:'center'
    },

});


export default styles;