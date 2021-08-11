import React, { useState } from "react";
import "react-native-gesture-handler";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import Logo from "../../../assets/samaj-images/logo.png";
import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors, IconButton } from "react-native-paper";
import { Drawer } from "react-native-paper";
import NavigationService from "../../utils/NavigationService";

import SecondPage from "../SecondPage";

import HomePage from "../HomePage";
const Slide = createDrawerNavigator();

const Tab = createBottomTabNavigator();

const HomeBottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      initialRouteName="Home"
      activeColor="black"
    >
      {BottomTabRoutes.map((route, index) => {
        return <Tab.Screen key={route.name} {...route} />;
      })}
    </Tab.Navigator>
  );
};

const BottomTabRoutes = [
  {
    name: "HomePage",
    component: HomePage,
    options: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      showLabel: false,
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            size={24}
            color={focused ? "#fc8019" : "black"}
            name={focused ? "ios-home-sharp" : "ios-home-outline"}
          />
          <Text style={{ color: focused ? "#fc8019" : "black", fontSize: 10 }}>
            Home
          </Text>
        </>
      ),
    },
  },
  {
    name: "SecondPage",
    component: SecondPage,
    options: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      showLabel: false,
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            size={24}
            color={focused ? "#fc8019" : "black"}
            name={focused ? "ios-person" : "ios-person-outline"}
          />
          <Text style={{ color: focused ? "#fc8019" : "black", fontSize: 10 }}>
            Home
          </Text>
        </>
      ),
    },
  },
];

function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={styles.sidebar}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.heading}>
          <Text style={styles.anilkumar}>Anil Kumar </Text>

          <Text style={styles.premium}>Premium User</Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.general}>General</Text>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("AnimationScreen")}
          >
            <Text style={styles.jobs}>My Jobs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("AnimationScreen")}
          >
            <Text style={styles.fav}>My Favourites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomePage")}
          >
            <Text style={styles.news}>Latest News</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomePage")}
          >
            <Text style={styles.products}>My Products & Services</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomePage")}
          >
            <Text style={styles.seller}>Sellers</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("HomePage")}
          >
            <Text style={styles.setting}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("SecondPage")}
          >
            <Text style={styles.support}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const DrawerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Slide.Navigator
        drawerContent={(props) => CustomDrawerContent(props)}
        drawerStyle={{
          justifyContent: "center",
          width: "80%",
          shadowColor: "#000000",
          elevation: 10,
          shadowOpacity: 0.9,
          shadowRadius: 4,
        }}
      >
        <Slide.Screen name="bottomtabs" component={HomeBottomTab} />

        <Slide.Screen name="HomePage" component={HomePage} />
      </Slide.Navigator>
    </SafeAreaView>
  );
};

export default DrawerScreen;
