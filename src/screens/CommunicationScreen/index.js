
import React, {  useRef  } from 'react';
import { StyleSheet, Text,Dimensions, View,Image,TouchableOpacity,StatusBar,SafeAreaView} from 'react-native';

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

const CommunicationScreen = () => {



  const passwordRef = useRef(null);


  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter the email."),
    password: Yup.string()
      .min(2, "Password is too short.")
      .max(50, "Password is too long.")
      .required("Please enter the password."),
    });



 const {
    validateForm,
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    resetForm,
  } = useFormik({
    validationSchema: LoginSchema,
    initialValues: { email: "", password: "" },
    onSubmit: async ({ email, password,phoneno }) => {
      setLoading(true);
      login({ body: { identifier: email, password,phoneno } })
        .then((res) => {
          AsyncStorage.setItem("accessToken", res.token);
          dispatch({
            type: "USERLOGIN",
            payload: res.data,
          });
          setSnackbar({
            visible: true,
            text: "Login successful",
            error: false,
          });
          setLoading(false);
          setTimeout(() => {
            NavigationService.reset("Home");
            resetSnackbar();
            resetForm();
          }, 1000);
        })
        .catch((err) => {
          setLoading(false);
          setSnackbar({
            visible: true,
            text: err?.data?.message || "Failed to sign in.",
            error: true,
          });
        });
    },
  });





  return (


 <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
        
        <View style={styles.container}>


           <View style={styles.top}>
                <View style={styles.intop}>


                        <TouchableOpacity
              onPress={() => NavigationService.goBack()}
             
            >
              <Icon size={30} name="ios-arrow-back-sharp" />
            </TouchableOpacity>

                    <View style={styles.welcome}> 

                        <Text style={styles.jyc}>Communication</Text>

                        <Text style={styles.access}>Details</Text> 

                      </View>  
                </View>
           </View>



           <View style={styles.mid}>

           <View style={styles.inmid}>
        <Text style={{fontFamily:theme.font.fontMedium,}}>How many do you want to recieve an applications ?</Text>
              <AppTextInput
                  icon="phoneno"
                  label="Recieve an applications"
               
                 
                  styles={{ marginBottom: 10 ,fontSize:15,top:10}}
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
           
   




</View>






           </View>




           <View style={styles.bottom}>


                       <LinearGradient    start={{ x: 0.0, y: 0.25 }}
                                          end={{ x: 0.5, y: 1.0 }}
                                          colors={["#fc8019", "#fc8019"]}
                                          style={styles.lineargradient}
                                        >
                               <TouchableOpacity style={styles.emailbtn}     onPress={() => NavigationService.navigate("PostedScreen")} >
                                           <Text style={styles.email}>
                                                 Save and Continue
                                          </Text>
                               </TouchableOpacity>
                       

                       </LinearGradient>
                     
             
           </View>

              




        </View>     








</SafeAreaView>
  );
}


export default CommunicationScreen;