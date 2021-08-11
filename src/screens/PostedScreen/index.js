
import React, {  useRef,useEffect  } from 'react';
import { StyleSheet, Text,Dimensions, View,Image,TouchableOpacity,StatusBar,SafeAreaView,Animated} from 'react-native';

import Logo from '../../../assets/samaj-images/logo.png';

import  LinearGradient  from 'react-native-linear-gradient';

import AppTextInput from "../../components/AppTextInput";
import Google from '../../../assets/samaj-images/google.png';
import Facebook from '../../../assets/samaj-images/fb.png';
import styles from './styles';
import NavigationService from "../../utils/NavigationService";

import * as Yup from "yup";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import theme from "../../theme";

import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";
import { Colors, IconButton } from "react-native-paper";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const PostedScreen = () => {


 


  const animate= useRef(new Animated.Value(0)).current;



  const right= useRef(new Animated.Value(0)).current;

  const bottom= useRef(new Animated.Value(0)).current;

  const left= useRef(new Animated.Value(0)).current;


  const opacity= useRef(new Animated.Value(0)).current;


  const animateprogress = () => {

    Animated.timing(animate,{
      duration:1000,
      toValue:4,
      useNativeDriver:false,
               

        
    }).start();
  }


  const rightradius = () => {
  
    Animated.timing(right,{

      delay:100,duration:1000,
      toValue:4,
      useNativeDriver:false,
               

        
    }).start();
  }


  const bottomradius = () => {
  
    Animated.timing(bottom,{

      delay:150,duration:1000,
      toValue:4,
      useNativeDriver:false,
               

        
    }).start();
  }
  const leftradius = () => {
  
    Animated.timing(left,{

      delay:200,duration:1000,
      toValue:4,
      useNativeDriver:false,
               

        
    }).start();
  }
  


  const tick = () => {

    Animated.timing(opacity,{
      duration:1000,delay:10,
      toValue:4,
      useNativeDriver:false,
               

        
    }).start();
  }

useEffect(() => {

 animateprogress(); 
 rightradius();
 leftradius();
 bottomradius();
 tick();
},[]);


  return (


 <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
        

<View style={{justifyContent:'center',alignItems:'center'}}>
        <View style={styles.tickicon}>  
             
     

            <Animated.View style={[styles.item,{ borderTopColor:animate.interpolate({
                                                                                       
                                                                            inputRange:[0,4],
                                                                            outputRange:["white","#fc8019"],


                                                                                }),
            borderRightColor:right.interpolate({
                                                                                       
                                                                            inputRange:[0,4],
                                                                            outputRange:["white","#fc8019"],


                                                                                }),
                borderBottomColor:bottom.interpolate({
                                                                                       
                                                                            inputRange:[0,4],
                                                                            outputRange:["white","#fc8019"],


                                                                                }),
                    borderLeftColor:left.interpolate({
                                                                                       
                                                                            inputRange:[0,4],
                                                                            outputRange:["white","#fc8019"],


                                                                                }),

                                                          transform:[
                                                                          {rotate:animate.interpolate({
                                                                            inputRange:[0,1],
                                                                            outputRange:['0deg','90deg'],
                                                                                            })}
                                                           ]}]}>
              <Animated.View style={{opacity:opacity.interpolate({
                                               inputRange:[0,1,2,3,4],
                                               outputRange:[0,0,0,0,1],

              })}}>
                <MaterialIcons size={140} color="#fc8019" name="check" />
              </Animated.View>
          
            

            </Animated.View>

            <Text style={{fontFamily: theme.font.fontMedium,fontSize: 22,top:130}}>Posted Succesfully !</Text>

            </View>

    </View>


<View style={styles.homebtn}>
  
              <TouchableOpacity style={styles.gotohome}   onPress={() => NavigationService.navigate("DrawerScreen")}>
              <Text style={styles.hometext}>Go to Home</Text>

              </TouchableOpacity>

</View>
          


</SafeAreaView>
  );
}


export default PostedScreen;