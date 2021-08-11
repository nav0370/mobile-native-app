 import React, { useState,useRef } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View,ScrollView, Dimensions,SafeAreaView,StatusBar,TouchableOpacity,Animated,Image,Easing} from 'react-native';



import * as Animatable from 'react-native-animatable';
import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { Colors, IconButton } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";


import SKIN from '../../../assets/samaj-images/SKIN.svg';


import LeftBody from '../../../assets/samaj-images/leftbody.svg';

import LeftHead from '../../../assets/samaj-images/lefthead.svg';


import LeftLeg from '../../../assets/samaj-images/leftleg.svg';

import RightHead from '../../../assets/samaj-images/righthead.svg';


import RightBody from '../../../assets/samaj-images/rightbody.svg';



import RightLeg from '../../../assets/samaj-images/RightLeg.svg';



const AnimationScreen = () => {



            const translation= useRef(new Animated.Value(0)).current;

            const position= useRef(new Animated.Value(0)).current;

            const hirereverse= useRef(new Animated.Value(0)).current;

            const workreverse= useRef(new Animated.Value(0)).current;

              




            const backhire = () =>{

             

               Animated.stagger(1,[
                    
                   
                     Animated.timing(position,{

                   toValue:100,
                   duration:2000,
                   useNativeDriver:true
                     }), 




                  Animated.timing(translation,{

                   toValue:200,
                   duration:2000,
                   useNativeDriver:true,
                   easing:Easing.ease,

                     }), 


                  Animated.timing(hirereverse,{

                   toValue:200,
                   duration:2000,
                   useNativeDriver:true,

                     }), 


                   Animated.timing(workreverse,{

                   toValue:0,display:'none',
                   duration:2000,
                   useNativeDriver:true,
                     }), 

                 

                  ]).start(() =>{

            });

            }






            const work = () => {


               Animated.stagger(5,[
                    

                  Animated.timing(translation,{
                  
                   toValue:0,
                   duration:2000,
                   useNativeDriver:true,

                     }), 

                    Animated.timing(position,{

                   toValue:200,
                   duration:2000,
                   useNativeDriver:true
                     }), 
                    
                     Animated.timing(hirereverse,{

                   toValue:0,
                   display:'none',
                   duration:2000,
                   useNativeDriver:true,

                     }), 



                      Animated.timing(workreverse,{
                  
                   toValue:200,
                   duration:2000,
                   useNativeDriver:true,

                     }), 



                  ]).start(() =>{

            });
              
            }



	return(

            
 <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
             
         <View style={styles.container}>
            
                <View style={styles.header}>

                   <View style={styles.inheader}>

                       <View style={styles.buttons}>
        
                                          <TouchableOpacity style={styles.hirebtn} onPress={backhire}>

                                                <Text style={styles.hiretext}>

                                                   I want to Hire

                                                </Text>
                                        </TouchableOpacity>


                                           <TouchableOpacity style={styles.workbtn} onPress={work}>

                                                <Text style={styles.worktext}>I want to Work

                                                </Text>
                                        </TouchableOpacity>

                      </View>

        
                          <View style={GlobalStyles.rowFlexCenter}>
                            <IconButton
                              icon="notifications-outline"
                              color='#fc8019'
                              size={25}
                              onPress={() => NavigationService.navigate("JobsScreen")}
                            />
                         
                          </View>
    
                </View>

               </View>















               <View style={styles.animationbox}>
                            







              <View style={styles.animatedbuttons}>

                                                     <Animated.View style={{ left:50,position:'absolute',top:30,

                                                           
                                                           opacity: translation.interpolate({
                                                            inputRange:[0,150,200],
                                                            outputRange:[0,0,1],

                                                           }),

                                                         

                                                          transform:[{translateX:translation},
                                                                                            {rotate:translation.interpolate({
                                                                                              inputRange:[0,100],
                                                            outputRange:['0deg','180deg'],
                                                                                            })}
                                                           ],

                                                 


                                                            }}>


                                                            <Text style={styles.wantohiretext}>I WANT TO HIRE YOU</Text>

                                                     </Animated.View>


                                                   <Animated.View style={{  position:'absolute',top:0,
                                                                                       left:-80,                                       
                                                                                       
                                                                           opacity: position.interpolate({
                                                                            inputRange:[0,150,200],
                                                                            outputRange:[0,0,1],

                                                                           }),


                                                          transform:[{translateX:position},
                                                                                            {rotate:position.interpolate({
                                                                                              inputRange:[0,50],
                                                            outputRange:['0deg','180deg'],
                                                                                            })}
                                                           ],

                                                                    

                                                                                       


                                                                            }}><Animated.Text >
                                                                                        <IconButton
                                                                                                    icon="ios-checkmark-circle-sharp"
                                                                                                    color='#fc8019'
                                                                                                    size={35}
                                                                                        style={styles.rotatework}
                                                                               
                                                                              />
                                                                           

                                                   </Animated.Text></Animated.View>




                                          </View>




                         







                         <View style={styles.inanimationbox}>

  
                           <Animatable.View animation="slideInLeft" duration={2000}>

                                        <View style={styles.leftanimation}>

                                              
                                              <LeftHead height={50} left={-5} />
                                              <LeftBody  height={100} left={30}/>
                                              <LeftLeg  height={130} />

                                        </View>

 
                              </Animatable.View>     
                     



                           <Animatable.View animation="slideInRight" duration={2000}>

                                        <View style={styles.rightanimation}>

              

                                          <RightHead height={45} top={2} right={-15}/>

                                              <View style={styles.rightbody}>
                                                  
                                                    <Animatable.View delay={2000} animation="tada" duration={2000}>
                                                             <SKIN height={35} top={3} right={-9}/>
                                                     </Animatable.View>        
                                                    <RightBody height={117} right={37} top={0}/>


                                                  

                                              </View>

                                              <RightLeg  height={145} right={-12} top={-12}/>

                                        </View>


                              </Animatable.View>     
                     


                    </View>
                    

               </View>





                <View style={styles.lastbuttons}>


                   <View style={styles.inlastbuttons}>

    

                                             <Animated.View style={{
width:Dimensions.get('screen').width-50,height:50,
justifyContent:'center',alignItems:'center',position:'absolute',



                                                   opacity: hirereverse.interpolate({
                                               inputRange:[0,190,200],
                                               outputRange:[0,0,1],

                                               }),

                                                   transform:[
                                                              {translateX:hirereverse.interpolate({

                                                                inputRange:[0,200],
                                                                outputRange:[-200,0],
                                                              })},
                                                             
                                                              


                                                   ]

                                                   
                                             


                                             }}>
                       <TouchableOpacity style={styles.hirecontinue}     onPress={() => NavigationService.navigate("DrawerScreen")}><Text style={styles.continue}>Continue</Text></TouchableOpacity>


                       </Animated.View>



                                         <Animated.View style={{ backgroundColor:'#fc8019',borderRadius:5,


                                                                  width:Dimensions.get('screen').width-50,height:50,
                                                                  justifyContent:'center',alignItems:'center',position:'absolute',

                                                                   opacity: workreverse.interpolate({
                                                                   inputRange:[0,190,200],
                                                                   outputRange:[0,0,1],

                                                               }),

                                                             transform:[
                                                                        {translateX:workreverse.interpolate({

                                                                          inputRange:[0,200],
                                                                          outputRange:[-200,0],
                                                                       })},    ]


                                          }}>



                       <TouchableOpacity style={styles.workcontinue}     onPress={() => NavigationService.navigate("JobsScreen")}><Text style={styles.continue}>Continue</Text></TouchableOpacity>

        </Animated.View>



                   </View>









                </View>

           




               </View>
    
</SafeAreaView>

		);
}

export default AnimationScreen;