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
  Dimensions,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import Icon from "react-native-vector-icons/Ionicons";
import GlobalStyles from "../../utils/globalStyles";
import theme from "../../theme";
import AppTextInput from "../../components/AppTextInput";
import { Button, Snackbar, Text } from "react-native-paper";
import NavigationService from "../../utils/NavigationService";
import { register } from "../../store/services/user";
import CustomSnackBar from "../../components/CustomSnackBar";

const { height, width } = Dimensions.get("window");

const SignUpScreen = ({ navigation }) => {
  const SignUpSchema = Yup.object().shape({
    name: Yup.string().trim().required("Please enter your name."),
    email: Yup.string()
      .email("Please enter a valid email.")
      .required("Please enter the email."),
    password: Yup.string()
      .min(2, "Password is too short.")
      .max(50, "Password is too long.")
      .required("Please enter the password."),
    confirm_password: Yup.string()
      .min(2, "Password is too short.")
      .max(50, "Password is too long.")
      .required("Please enter the confirm password.")
      .oneOf(
        [Yup.ref("password"), null],
        "Password and confirm password do not match."
      ),
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const { user, locale } = useSelector((state) => ({
    user: state.auth_reducer.user,
    loading: state.auth_reducer.loading,
    locale: state.menu.locale,
  }));
  const dispatch = useDispatch();

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
    validationSchema: SignUpSchema,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
      name: "",
    },

    onSubmit: ({ email, password, name }) => {
      setLoading(true);
      register({ body: { email, password, role: "user", name } })
        .then(() => {
          setSnackbar({
            visible: true,
            text: "Successfully created the acccount.",
            error: false,
          });
          setLoading(false);
          resetForm();
          setTimeout(() => {
            NavigationService.reset("LoginScreen");
            resetSnackbar();
          }, 1000);
        })
        .catch((err) => {
          setLoading(false);
          setSnackbar({
            visible: true,
            text: err?.data?.message || "Failed to create new account.",
            error: true,
          });
        });
    },
  });

  const signUpUser = () => {
    resetSnackbar();
    validateForm()
      .then((res) => {
        if (res && Object.keys(res).length > 0) {
          setSnackbar({
            visible: true,
            text:
              res?.name || res?.email || res?.password || res?.confirm_password,
            error: true,
          });
        } else {
          handleSubmit();
        }
      })
      .catch(() => {
        setSnackbar({
          visible: true,
          text: "Failed to sign up.",
          error: true,
        });
      });
  };

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
          <ScrollView keyboardShouldPersistTaps="handled">
            <TouchableOpacity
              onPress={() => NavigationService.goBack()}
              style={{ paddingHorizontal: 25, paddingVertical: 10 }}
            >
              <Icon size={30} name="ios-arrow-back-sharp" />
            </TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 24,
                flex: 1,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: theme.font.fontSemiBold,
                  marginTop: 0,
                  fontSize: 22,
                }}
              >
                {locale?.register?.heading}
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: theme.font.fontBold,
                  marginBottom: 5,
                }}
              >
                Get full access for free.
              </Text>
              <CustomSnackBar
                noduration
                snackbar={snackbar}
                setSnackbar={setSnackbar}
              />
              <AppTextInput
                ref={emailRef}
                icon="mail-outline"
                label="Email"
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                error={errors.email}
                touched={touched.email}
                value={values.email}
                autoCompleteType="name"
                keyboardType="email-address"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                styles={{ marginBottom: 10 }}
                onSubmitEditing={() => passwordRef.current?.focus()}
              />
              <AppTextInput
                label={locale?.register?.firstName}
                icon="person-outline"
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                error={errors.name}
                value={values.name}
                touched={touched.name}
                autoCompleteType="name"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                styles={{ marginBottom: 10 }}
                onSubmitEditing={() => emailRef.current?.focus()}
              />
              
              <AppTextInput
                label={locale?.register?.password}
                ref={passwordRef}
                icon="lock-outline"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                error={errors.password}
                touched={touched.password}
                value={values.password}
                secureTextEntry
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="next"
                returnKeyLabel="next"
                styles={{ marginBottom: 10 }}
                onSubmitEditing={() => confirmPasswordRef.current?.focus()}
              />
              {/* <AppTextInput
                label={`Confirm ${locale?.register?.password}`}
                ref={confirmPasswordRef}
                icon="lock-outline"
                onChangeText={handleChange("confirm_password")}
                onBlur={handleBlur("confirm_password")}
                error={errors.confirm_password}
                touched={touched.confirm_password}
                value={values.confirm_password}
                secureTextEntry
                autoCompleteType="password"
                autoCapitalize="none"
                returnKeyType="go"
                returnKeyLabel="go"
                styles={{ marginBottom: 10 }}
                onSubmitEditing={handleSubmit}
              /> */}
             
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  // justifyContent: "center",
                
                }}
              >
                
                <Text style={{ fontFamily: theme.font.fontRegular }}>
                  Don't have an account ?
                </Text>
                <Button
                  onPress={() => NavigationService.navigate("LoginScreen")}
                  labelStyle={{ textAlign: "left", marginLeft: 5 }}
                  uppercase={false}
                >
                  Sign-In
                </Button>
              </View>
              <Button
                loading={loading}
                style={{ marginTop: 10 }}
                onPress={signUpUser}
                contentStyle={{ paddingVertical: 5 }}
                mode="contained"
              >
            <Text style={{color: '#fff', fontSize: 15}}>Register</Text> 
              </Button>

              <Text
                style={{
                  textAlign: "left",
                  fontSize: 18,
                  fontFamily: theme.font.fontSemiBold,
                  marginTop: 15,
                  marginBottom: 8,
                }}
              >
                By clicking REGISTER, I agree to the
                Terms, Conditions & Privacy Policy 
              </Text>
            </View>
          
          
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUpScreen;
