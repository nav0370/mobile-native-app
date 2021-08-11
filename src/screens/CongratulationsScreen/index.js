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

const CongratulationsScreen = ({ navigation}) => {
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
                  marginBottom: 0,
                  fontSize: 24,
                  color: '#FC8019',
                }}
              >
                {locale?.congratulation?.heading}
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  fontSize: 15,
                  fontFamily: theme.font.fontRegular,
                  marginTop:0,
                  marginBottom: 25,
                }}
              >
              You have successfully registered!
              </Text>
              <CustomSnackBar
                noduration
                snackbar={snackbar}
                setSnackbar={setSnackbar}
              />
              <AppTextInput
                label={locale?.congratulation?.otp}
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
        
              <Text style={{ fontFamily: theme.font.fontRegular,  marginBottom: 25, }}>
                (OTP sent on your email & phone)
                </Text>

              <Button
                loading={loading}
                style={{ marginTop: 10 }}
                onPress={signUpUser}
                contentStyle={{ paddingVertical: 5 }}
                mode="contained"
              >
             <Text style={{color: '#fff', fontSize: 15}}> Verify</Text>  
              </Button>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 10,
                }}
              >
                <Text style={{ fontFamily: theme.font.fontRegular }}>
                You didn't receive a OTP?
                </Text>
                <Button
                  onPress={() => NavigationService.navigate("LoginScreen")}
                  labelStyle={{ textAlign: "left", marginLeft: 5 }}
                  uppercase={false}
                >
                 Resend OTP
                </Button>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CongratulationsScreen;
