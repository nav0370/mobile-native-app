import React, { useState, useEffect, useRef } from "react";
import {
  ScrollView,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  StatusBar,
  Keyboard,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  View,
  Text,
  SafeAreaView,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import { connect } from "react-redux";
// import auth from "@react-native-firebase/auth";
// import { LoginManager, AccessToken } from "react-native-fbsdk";
// import { GoogleSignin } from "@react-native-community/google-signin";
import { useFormik } from "formik";
import * as Yup from "yup";
// import styles from "./styles";
import NavigationService from "../../utils/NavigationService";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import AppTextInput from "../../components/AppTextInput";
import { Button, Snackbar } from "react-native-paper";
import { login } from "../../store/services/user";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomSnackBar from "../../components/CustomSnackBar";

import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";


import { Colors, IconButton } from "react-native-paper";


const { height } = Dimensions.get("window");

// GoogleSignin.configure({
//   webClientId:
//     "513136185738-44dfaqe7lraoufs65c3ae4vgori7mo8a.apps.googleusercontent.com",
// });

// LoginManager.setLoginBehavior("web_only");

const JobsScreen = (props) => {
  const [loading, setLoading] = useState(false);

  const [snackbar, setSnackbar] = useState({
    visible: false,
    text: "",
    error: false,
  });

  const resetSnackbar = () =>
    setSnackbar({
      visible: false,
      text: "",
      error: false,
    });

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
    onSubmit: async ({ email, password }) => {
      setLoading(true);
      login({ body: { identifier: email, password } })
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

  const passwordRef = useRef(null);

  const { user, locale } = useSelector((state) => ({
    user: state.auth_reducer.user,
    locale: state.menu.locale,
  }));

  // console.log(user, "USERS");
  const dispatch = useDispatch();

  const [forgotPassword, setForgotPassword] = useState(false);

  useEffect(() => {
    // dispatch(checkAuth(props.navigation));
  }, []);

  const onGoogleBtnPress = async () => {
    // const { idToken } = await GoogleSignin.signIn();
    // const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // dispatch(signInWithGoogle(googleCredential, props.navigation));
  };

  const onFacebookBtnPress = async () => {
    // const result = await LoginManager.logInWithPermissions([
    //   "public_profile",
    //   "email",
    // ]);
    // if (result.isCancelled) {
    //   throw "User cancelled the login process";
    // }
    // const data = await AccessToken.getCurrentAccessToken();
    // if (!data) {
    //   throw "Something went wrong obtaining access token";
    // }
    // const facebookCredential = auth.FacebookAuthProvider.credential(
    //   data.accessToken
    // );
    // dispatch(signInWithFacebook(facebookCredential, props.navigation));
  };

  const forgot_password = () => {
    setLoading(true);
    // auth()
    //   .sendPasswordResetEmail(email)
    //   .then((res) => {
    //     showMessage("Password reset email send successfully");
    //     setLoading(false);
    //     setForgotPassword(false);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     showError(err.message);
    //   });
  };

  const loginUser = async () => {
    resetSnackbar();
    validateForm()
      .then((res) => {
        if (res && Object.keys(res).length > 0) {
          setSnackbar({
            visible: true,
            text: res?.email || res?.password,
            error: true,
          });
        } else {
          handleSubmit();
        }
      })
      .catch(() => {
        setSnackbar({
          visible: true,
          text: "Failed to sign in.",
          error: true,
        });
      });
  };

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
     <Header
        left={
          <Image
            source={require("../../../assets/samaj-images/logo.png")}

            onPress={() => NavigationService.navigate("Home")}
            style={{ width: 35, height: 30 }}
          />
        }
      
        icon={
          <View style={GlobalStyles.rowFlexCenter}>
            <IconButton
              icon="notifications-outline"
              color='#fc8019'
              size={22}
              style={{ margin: 0 }}
              onPress={() => NavigationService.navigate("JobsScreen")}
            />
         
          </View>
        }
      />

        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <View
              style={{
                paddingHorizontal: 24,
                flex: 1,
              }}
            >
              <View
                style={{
                  marginTop: 100,
                }}
              ></View>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: theme.font.fontSemiBold,
                }}
              >
                What
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: theme.font.fontRegular,
                  marginBottom: 8,
                }}
              >
                Job title, keywords, or company
              </Text>
              <View style={{ paddingBottom: 30 }}>
                <AppTextInput
                  icon="email-outline"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  error={errors.email}
                  touched={touched.email}
                  value={values.email}
                  autoCompleteType="email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  returnKeyType="next"
                  returnKeyLabel="next"
                  styles={{ marginBottom: 10 }}
                  onSubmitEditing={() => passwordRef.current?.focus()}
                />
              </View>
              <Text
                style={{
                  fontSize: 24,
                  fontFamily: theme.font.fontSemiBold,
                }}
              >
                Where
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: theme.font.fontRegular,
                  marginBottom: 8,
                }}
              >
                City, State or Pin Code
              </Text>
              <AppTextInput
                ref={passwordRef}
                icon="lock-outline"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                value={values.password}
                touched={touched.password}
                secureTextEntry
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="go"
                returnKeyLabel="go"
                onSubmitEditing={() => handleSubmit()}
              />
              <Button
                onPress={() => {}}
                uppercase={false}
                style={{
                  textAlign: "left",
                  marginTop: 10,
                }}
              >
                Current Location
              </Button>
              <Button
                loading={loading}
                style={{ marginTop: 20 }}
                contentStyle={{ paddingVertical: 5 }}
                mode="contained"
                  onPress={() => NavigationService.navigate("SearchShopsScreen")}
              >
                <Text style={{ color: "#fff" }}>Find Job</Text>
              </Button>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default JobsScreen;
