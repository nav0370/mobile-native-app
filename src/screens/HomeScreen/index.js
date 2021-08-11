// const styles = StyleSheet.create({});

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


import { useDispatch, useSelector } from "react-redux";

import { currentUser } from "../../store/services/user";
import { useNetInfo } from "@react-native-community/netinfo";
import * as RNLocalize from "react-native-localize";

import Logo from "../../../assets/samaj-images/logo.png";

import LinearGradient from "react-native-linear-gradient";

import Google from "../../../assets/samaj-images/google.png";
import Facebook from "../../../assets/samaj-images/fb.png";
import NavigationService from "../../utils/NavigationService";

import theme from "../../theme";
import Header from "../../components/Header";

import GlobalStyles from "../../utils/globalStyles";

import styles from './styles';

import Icon from "react-native-vector-icons/Ionicons";
import { Colors, IconButton } from "react-native-paper";

const { width } = Dimensions.get("window");

const HomeScreen = (props) => {

  navigate = (key, params) => {
    props.navigation.navigate(key, params);
  };

  console.log(props, "NavigationService");

  // const dispatch = useDispatch();
  // const { user, audiobooks } = useSelector((state) => ({
  //   user: state.auth_reducer.user,
  //   audiobooks: state.app_reducer.audiobooks,
  // }));

  const netInfo = useNetInfo();
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

    <Header
      // left={
      //   <Image
      //     source={require("../../../assets/logo.png")}
      //     style={{ width: 35, height: 30 }}
      //   />
      // }
      title="Pareek Samaj"
      // icon={
      //   <View style={GlobalStyles.rowFlexCenter}>
      //     <IconButton
      //       icon="md-heart-outline"
      //       size={22}
      //       style={{ margin: 0 }}
      //       onPress={() => NavigationService.navigate("WishlistScreen")}
      //     />
      //     <IconButton
      //       icon="ios-search-outline"
      //       size={22}
      //       style={{ margin: 0 }}
      //       onPress={() => NavigationService.navigate("SearchScreen")}
      //     />
      //   </View>
      // }
    />

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
                onPress={() => NavigationService.navigate("ProScreen")}
              >
                <Text style={styles.email}>Sign up with email</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
