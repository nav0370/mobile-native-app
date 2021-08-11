import React, { useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Platform,
  SafeAreaView,
  View,
  Image,
  Picker,
  Dimensions,
} from "react-native";
import styles from './styles';

import AppTextInput from "../../components/AppTextInput";

import GlobalStyles from "../../utils/globalStyles";
import theme from "../../theme";

import { TextInput } from "react-native-paper";
import { Button, Snackbar, Text } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";

import Icon from "react-native-vector-icons/Ionicons";

const FamilyScreen = () => {
  
  const [selectedValue, setSelectedValue] = useState("State");
  
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
             

       
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={styles.scroll}>

              <View style={styles.inheader}>
                <TouchableOpacity
                  onPress={() => NavigationService.goBack()}
                 
                >
                  <Icon size={30} name="ios-arrow-back-sharp" />
                </TouchableOpacity>
              </View>



              <View style={styles.heading}>
                 <Text style={styles.inheading}>

                       <Text style={styles.great}>Great! </Text>

                       <Text style={styles.family}>We would like to know about you and your family</Text>

                 </Text>
                
              </View>






              <ScrollView>


                 <View style={styles.inputboxes}>

                 <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your First Name ? </Text>

                       <AppTextInput
                       
                        
                        label="First Name"
                        placeholder="Enter your First Name"
                        styles={styles.inputbox}
                       
                      />
  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Last Name ? </Text>

                       <AppTextInput
                       
                        
                        label="Last Name"
                        placeholder="Enter your Last Name"
                         styles={styles.inputbox}
                       
                      />

  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>Enter your DOB </Text>

                       <AppTextInput
                       
                        
                        label="DOB"
                        placeholder="Date of Birth"
                         styles={styles.inputbox}
                       
                      />                      

  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Father's Name ? </Text>

                        <AppTextInput
                       
                        
                        label="Father's Name"
                        placeholder="Enter your Father's Name"
                        styles={styles.inputbox}
                       
                      />
  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Grand Father's Name ? </Text>

                                               <AppTextInput
                       
                        
                        label="Grand Father's Name"
                        placeholder="Enter your Grand Father's Name"
                         styles={styles.inputbox}
                       
                      />
  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Marital status ? </Text>

                         <AppTextInput
                       
                        
                        label="Marital Status"
                        placeholder="Select Your Marital Status"
                         styles={styles.inputbox}
                       
                      />

  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Wife Name ? </Text>


                         <AppTextInput
                       
                        
                        label="Wife Name"
                        placeholder="Enter Your Wife Name"
                         styles={styles.inputbox}
                       
                      />


 <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>When did you marry ?</Text>

   <View style={{flexDirection: 'row',justifyContent: 'space-between' }}>
      <View style={{borderWidth: 1,borderColor:"rgba(0,0,0,0.5)",borderRadius:5,marginTop: 20,width:'30%',}}>



       <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              style={{width: '100%'}}
            >
              <Picker.Item label="Date"/>
              <Picker.Item label="1" value="Uttar Pradesh" />
              <Picker.Item label="2" value="Gujarat" />

              <Picker.Item label="3" value="Uttar Pradesh" />
              <Picker.Item label="4" value="Gujarat" />

              <Picker.Item label="5" value="Uttar Pradesh" />
              <Picker.Item label="6" value="Gujarat" />
            </Picker>

          
      </View>

    <View style={{borderWidth: 1,borderColor:"rgba(0,0,0,0.5)",borderRadius:5,marginTop: 20,width:'30%',}}>



       <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              style={{width: '100%'}}
            >
              <Picker.Item label="Month"/>
              <Picker.Item label="January" value="Uttar Pradesh" />
              <Picker.Item label="March" value="Gujarat" />

              <Picker.Item label="April" value="Uttar Pradesh" />
              <Picker.Item label="May " value="Gujarat" />
            </Picker>


          
      </View>

    <View style={{borderWidth: 1,borderColor:"rgba(0,0,0,0.5)",borderRadius:5,marginTop: 20,width:'30%',}}>



       <Picker
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              style={{width: '100%'}}
            >
              <Picker.Item label="year"/>
              <Picker.Item label="1998" value="Uttar Pradesh" />
              <Picker.Item label="1997" value="Gujarat" />

              <Picker.Item label="1996" value="Uttar Pradesh" />
              <Picker.Item label="1995" value="Gujarat" />
              <Picker.Item label="1994" value="Uttar Pradesh" />
              <Picker.Item label="1993" value="Gujarat" />
            </Picker>

          
      </View>

</View>



  <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your Address ? </Text>


                         <AppTextInput
                       
                        
                        label="House Number"
                        placeholder="Enter Your Hno."
                         styles={styles.inputbox}
                       
                      />


                         <AppTextInput
                       
                        
                        label="Street/Village"
                        placeholder="Enter Your street/village"
                         styles={styles.inputbox}
                       
                      />   


 <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your State </Text>
<View style={{borderWidth: 1,borderColor:"rgba(0,0,0,0.5)",borderRadius:5,marginTop: 20,}}>



 <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Please select State" value=""/>
        <Picker.Item label="Uttar Pradesh" value="Uttar Pradesh" />
        <Picker.Item label="Gujarat" value="Gujarat" />
      </Picker>
    
</View>


 <Text style={{fontSize: 15,fontFamily: theme.font.fontMedium,top:10}}>What's your City? </Text>

<View style={{borderWidth: 1,borderColor:"rgba(0,0,0,0.5)",borderRadius:5,marginTop: 20,}}>



 <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Select your City " value=""/>
        <Picker.Item label="Lucknow" value="Uttar Pradesh" />
        <Picker.Item label="Bhopal" value="Gujarat" />
      </Picker>
    
</View>







                        </View>
             

                <TouchableOpacity style={styles.nextbutton} onPress={() => NavigationService.navigate("ReligionScreen")}>


                    <Text style={styles.nexttext}>NEXT</Text>


                </TouchableOpacity>


              </ScrollView>
         
            




         </ScrollView>
         </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FamilyScreen;
