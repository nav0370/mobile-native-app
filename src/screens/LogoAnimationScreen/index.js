 import React, { useState,useRef,useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,ScrollView,Dimensions,SafeAreaView,StatusBar,TouchableOpacity,Animated,Image,Easing} from 'react-native';



import * as Animatable from 'react-native-animatable';
import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { Colors, IconButton } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";
import Medals from '../../../assets/samaj-images/medals.png';

import MainLogo from '../../../assets/samaj-images/MainLogo.svg';


const LogoAnimationScreen = () => {



const mainlogo= useRef(new Animated.Value(0)).current;


const pareekanimation= useRef(new Animated.Value(0)).current;





const medalanimation= useRef(new Animated.Value(0)).current;



const medalopacity= useRef(new Animated.Value(0)).current;



const samajanimation= useRef(new Animated.Value(0)).current;




              
const logo = () => {
 
 Animated.timing(mainlogo,{
  
  toValue:200,
  duration:2000,
  useNativeDriver:false,

 }).start();


}



              
const pareek = () => {
 
 Animated.timing(pareekanimation,{
  
  toValue:200,
  duration:3000,
  useNativeDriver:false,

 }).start();


}


              
const samaj = () => {
 
 Animated.timing(samajanimation,{
  
  toValue:200,
  duration:3000,
  useNativeDriver:false,

 }).start();


}


              
const medal = () => {


                          
       
       Animated.timing(medalanimation,{
        
        toValue:200,
        
        duration:3000,
       
        useNativeDriver:false,
      
}).start();

      
}









useEffect(() => {
  logo();
  pareek();
  samaj();
  medal();

  setTimeout(() => {
    NavigationService.navigate("DrawerScreen")
  },3500);


},[]);





	return(

            
 <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
              
                  
            <View style={styles.container}>   

              <View style={styles.animationlogo}>
                 

                    <Animated.View style={[styles.mainlogo, { opacity:mainlogo.interpolate({
                                      inputRange:[0,130,200],
                                      outputRange:[0,0.5,1],

                                     }),}]}>
                    
                        <MainLogo height={200}/>
                    
                    </Animated.View>


                  <View style={styles.down}> 
                         <Animated.Image source={Medals} style={[styles.medal,{opacity:medalanimation.interpolate({
                                                                                      inputRange:[0,180,200],
                                                                                      outputRange:[0,0.1,1],

                                                                                     })
                          } ]} />


                         
                         <Animated.Text style={[styles.pareek,{transform:[{translateX:pareekanimation.interpolate({
                                                                                  inputRange:[0,200],
                                                                                  outputRange:[-300,0],
                                                                          })}
                                     ],
                          } ]}>PAREEK</Animated.Text>
                         


                         <Animated.Text style={[styles.samaj,{transform:[{translateX:samajanimation.interpolate({
                                                                                  inputRange:[0,200],
                                                                                  outputRange:[400,0],
                                                                          })}
                                     ],
                          } ]}>SAMAJ</Animated.Text>

                  </View> 
              </View>
            

            </View>
</SafeAreaView>

		);
}

export default LogoAnimationScreen;