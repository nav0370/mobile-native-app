import React from "react";
import {
  StyleSheet,
  Text,
  Dimensions,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from "react-native";

import Logo from "../../../assets/samaj-images/logo.png";

import LinearGradient from "react-native-linear-gradient";

import Google from "../../../assets/samaj-images/google.png";
import Facebook from "../../../assets/samaj-images/fb.png";
import styles from "./styles";
import NavigationService from "../../utils/NavigationService";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";
import { Colors, IconButton } from "react-native-paper";

const SecondPage = () => {
  const socialbuttons = [
    {
      key: 1,
      img: Google,
      name: "GOOGLE",
    },
    {
      key: 2,
      img: Facebook,
      name: "FACEBOOK",
    },
  ];

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <View style={styles.incontainer}>
        <View style={styles.top}>
          <View style={styles.intop}>
            <Image source={Logo} style={styles.samajlogo} />
            <Text style={styles.samajtext}>SAMAJ</Text>
          </View>
        </View>

        <View style={styles.mid}>
          <View style={styles.inmid}>
            <Text style={styles.joinyourcommunit}>Join Your Community</Text>

            <Text style={styles.account}>
              Create an account for full access today
            </Text>

            <Text style={styles.signup}> sign up with ...</Text>
          </View>
        </View>

        <View style={styles.bottom}>
          <View style={styles.inbottom}>
            <View style={styles.buttons}>
              {socialbuttons.map((buttons) => {
                return (
                  <TouchableOpacity key={buttons.key} style={styles.btn}>
                    <Image source={buttons.img} style={styles.socailimages} />
                    <Text>{buttons.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>

            <View style={styles.dashor}>
              <View style={styles.leftline}></View>

              <Text style={styles.or}>OR</Text>
              <View style={styles.rightline}></View>
            </View>

            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 0.5, y: 1.0 }}
              colors={["#fc8019", "#fc8019"]}
              style={styles.lineargradient}
            >
              <TouchableOpacity
                style={styles.emailbtn}
                onPress={() => NavigationService.navigate("ThirdPage")}
              >
                <Text style={styles.email}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SecondPage;
