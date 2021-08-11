
import React, {  useRef  } from 'react';
import { StyleSheet, Text,Dimensions, View,Image,TouchableOpacity,StatusBar,SafeAreaView} from 'react-native';


import  LinearGradient  from 'react-native-linear-gradient';

import styles from './styles';
import NavigationService from "../../utils/NavigationService";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";
import { Colors, IconButton } from "react-native-paper";

const AnilScreen = () => {



 




  return (


 <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
        
      
         <View style={styles.container}>


                <Text>

                   <Text>Congratulations!</Text>

                   <Text>Anil</Text>

                   <Text>Ji</Text>

                </Text>


                <Text>
                     
                     your verification process is succesfully completed.

                </Text>


                <Text> Choose what Interests you!</Text>


                
                <View></View>


                <TouchableOpacity></TouchableOpacity> 



         </View>







</SafeAreaView>
  );
}


export default AnilScreen;