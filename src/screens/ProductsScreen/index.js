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

import Logo from "../../../assets/samaj-images/logo.png";

import styles from "./styles";

import theme from "../../theme";
import Header from "../../components/Header";
import CategoryTitle from "../../components/CategoryTitle";
import GlobalStyles from "../../utils/globalStyles";

import Icon from "react-native-vector-icons/Ionicons";

import { Colors, IconButton } from "react-native-paper";

import NavigationService from "../../utils/NavigationService";

import { Searchbar } from "react-native-paper";

const ProductsScreen = () => {
  const data = [
    {
      key: 1,
      heading: "Shop Keeper / Sales Executives",
      type: "Balaji Dry Fruits :",
      address: "Begum Bazar, Hyderabad, Telangana",

      amount: "$1500 a month",
      salary: "Salary",
      jobtype: " Full-Time",

      description:
        "As a ShopKeeper you are required to pick up food or grocery items ordered by customer from restaurants / outlets and deliver to customers . Delivery partners use their own vehicles (Bike/Cycle) to deliver orders to Zomato customers",
    },
  ];

  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />

      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{
              width: Dimensions.get("screen").width - 40,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity onPress={() => NavigationService.goBack()}>
              <Icon size={30} name="ios-arrow-back-sharp" />
            </TouchableOpacity>

            <View style={GlobalStyles.rowFlexCenter}>
              <IconButton
                icon="share-social"
                color="#fc8019"
                size={25}
                style={{ margin: 0 }}
                onPress={() => NavigationService.navigate("AnimationScreen")}
              />
            </View>
          </View>
        </View>

        <View style={styles.products}>
          {data.map((products) => {
            return (
              <View style={styles.inproducts} key={products.key}>
                <View style={styles.main}>
                  <Text style={styles.heading}>{products.heading}</Text>

                  <Text style={styles.type}>{products.type}</Text>

                  <Text style={styles.address}>{products.address}</Text>

                  <Text style={styles.jobdetails}>Job details</Text>

                  <Text style={styles.salary}>Salary</Text>

                  <Text style={styles.amount}>{products.amount}</Text>

                  <View>
                    <Text style={styles.jobtype}>Job Type</Text>

                    <Text style={styles.fulltime}>{products.jobtype}</Text>
                  </View>
                </View>
              </View>
            );
          })}
        </View>

        <View style={styles.box}>
          <View style={styles.inbox}>
            <Text style={styles.jobdescription}>Full Job Description</Text>

            {data.map((products) => {
              return (
                <View style={styles.text} key={products.key}>
                  <Text style={styles.description}>{products.description}</Text>
                </View>
              );
            })}

            <Text style={styles.duties}>Responsibilities and duties</Text>

            <View style={styles.documentapply}>
              <Text style={styles.documents}>Documents to carry:</Text>
              <TouchableOpacity
                style={styles.applybtn}
                onPress={() => NavigationService.navigate("EmployersScreen")}
              >
                <Text style={styles.applynow}>Apply Now</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.skills}>Skills Required:</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsScreen;
