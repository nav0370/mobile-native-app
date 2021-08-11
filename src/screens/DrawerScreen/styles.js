import { StyleSheet,Dimensions } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
 container: {
    flex: 1,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },

sidebar:{
    justifyContent:'center',alignItems:'center',


}
,
  scroll:{
           width:Dimensions.get('screen').width-120,height: 400,
  },
anilkumar:{
  textAlign: 'center',fontSize: 15,color:'#fc8019',fontFamily: 'Poppins-Bold',
}  ,
premium:{
  textAlign: 'center',fontSize: 13,
},
general:{
  fontSize: 20,color:'#fc8019',textTransform:'uppercase',fontFamily: 'Poppins-SemiBold',
},
content:{
  height:300,width:'100%',justifyContent:'space-evenly',flexDirection: 'column',fontFamily: 'Poppins-Regular',
},
jobs:{
  fontFamily: 'Poppins-Regular',
},
fav:{
    fontFamily: 'Poppins-Regular',

},
news:{
    fontFamily: 'Poppins-Regular',

  },
  products:{
      fontFamily: 'Poppins-Regular',

    },
    seller:{
        fontFamily: 'Poppins-Regular',

      },
      setting:{
          fontFamily: 'Poppins-Regular',

        },
        support:{
            fontFamily: 'Poppins-Regular',

        }

});

export default styles;
