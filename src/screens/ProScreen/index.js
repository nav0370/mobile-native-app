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
import styles from './styles';

const { height, width } = Dimensions.get("window");

const Aboutus = ({ navigation }) => {
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
                flex: 2,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <View>
            <Text>Text Dummy</Text>
           
            <TouchableOpacity 
            style={styles.workcontinue}     
            onPress={() => NavigationService.navigate("JobsScreen")}>
              <Text style={styles.continue}>Call Now</Text></TouchableOpacity>

          </View>
          <View>
            <Text>California almonds</Text>
            <Text>₹ 650.0/kg</Text>
            <Text>₹ Balaji Dry Fruits</Text>
            <Text>₹ Begum Bazaar</Text>
            <TouchableOpacity 
            style={styles.workcontinue}     
            onPress={() => NavigationService.navigate("JobsScreen")}>
              <Text style={styles.continue}>Get Best Price</Text></TouchableOpacity>

          </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Aboutus;
