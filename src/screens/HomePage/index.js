import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import Logo from "../../../assets/samaj-images/logo.png";
import Image1 from "../../../assets/samaj-images/image1.jpg";
import Image2 from "../../../assets/samaj-images/image2.jpg";
import Image3 from "../../../assets/samaj-images/image3.jpg";
import Image4 from "../../../assets/samaj-images/image4.jpg";
import Image5 from "../../../assets/samaj-images/image5.jpg";
import Image6 from "../../../assets/samaj-images/image6.jpg";
import Image7 from "../../../assets/samaj-images/image7.jpg";
import Image8 from "../../../assets/samaj-images/image8.jpg";
import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { Colors, IconButton } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";

const HomePage = () => {
  const imgdata = [
    {
      key: 1,
      img: Image4,
    },
    {
      key: 2,
      img: Image3,
    },
    {
      key: 3,
      img: Image8,
    },
  ];

  const section3 = [
    {
      key: 1,
      img: Image8,
      name: "Business",
    },
    {
      key: 2,
      img: Image5,
      name: "Job",
    },
    {
      key: 3,
      img: Image8,
      name: "Matrimony",
    },
    {
      key: 4,
      img: Image5,
      name: "News",
    },
  ];

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

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
              color="#fc8019"
              size={22}
              style={{ margin: 0 }}
              onPress={() => NavigationService.navigate("AnimationScreen")}
            />
          </View>
        }
      />

      <View style={{ padding: 20 }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {imgdata.map((image) => {
            return (
              <View key={image.key} style={styles.imgbox}>
                <Image source={image.img} style={styles.images} />
              </View>
            );
          })}
        </ScrollView>
      </View>

      <View style={styles.circleimages}>
        <Text style={styles.services}>Services</Text>
        <View style={styles.line}></View>

        <View style={styles.fourboxes}>
          <View style={styles.box}>
            {section3.map((event) => {
              return (
                <View style={styles.fourimages} key={event.key}>
                  <LinearGradient
                    colors={["red", "yellow"]}
                    style={styles.lineargradient}
                  >
                    <Image source={event.img} style={styles.image2} />
                  </LinearGradient>

                  <Text style={styles.servicestext}>{event.name}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomePage;
