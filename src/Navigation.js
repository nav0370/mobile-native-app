import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text } from "react-native";
import { forFade, forSlide } from "./utils/utils";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import NavigationService, {
  isMountedRef,
  navigationRef,
} from "./utils/NavigationService";
import LibraryScreen from "./screens/LibraryScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
import ProfileScreen from "./screens/ProfileScreen";
import InitialScreen from "./screens/InitialScreen";
import SignUpScreen from "./screens/SignUpScreen";
import ListeningLevel from "./screens/ListeningLevel";
import NetInfo from "@react-native-community/netinfo";
import NetworkErrorScreen from "./screens/NetworkErrorScreen";
import AudioBookViewScreen from "./screens/AudioBookViewScreen";
import AllCategories from "./screens/AllCategories";
import CategoryScreen from "./screens/CategoryScreen";
import WishlistScreen from "./screens/WishlistScreen";
import SearchScreen from "./screens/SearchScreen";
import ReligionScreen from "./screens/ReligionScreen";
import PostedScreen from "./screens/PostedScreen";
import EducationScreen from "./screens/EducationScreen";
import PANScreen from "./screens/PANScreen";
import CongoScreen from "./screens/CongoScreen";
import CongratulationsScreen from "./screens/CongratulationsScreen";
import CommunicationScreen from "./screens/CommunicationScreen";
import JobsScreen from "./screens/JobsScreen";
import EmployersScreen from "./screens/Employers";
import JobDetailsScreen from "./screens/JobDetails";
import PreviewScreen from "./screens/Preview";
import FamilyScreen from "./screens/FamilyScreen";
import HomePage from "./screens/HomePage";
import DrawerScreen from "./screens/DrawerScreen";

import LogoAnimationScreen from "./screens/LogoAnimationScreen";
import AnimationScreen from "./screens/AnimationScreen";
import SecondPage from "./screens/SecondPage";
import ProductsScreen from "./screens/ProductsScreen";

import ThirdPage from "./screens/ThirdPage";

import FourthPage from "./screens/FourthPage";

import FifthPage from "./screens/FifthPage";

import SearchShopsScreen from "./screens/SearchShopsScreen";
import ProScreen from "./screens/ProScreen";
import Aboutus from "./screens/Aboutus";

const Tab = createBottomTabNavigator();

const BottomTabRoutes = [
  {
    name: "Home",
    component: HomeScreen,
    options: {
      tabBarLabel: "Home",
      tabBarColor: "#fff",
      showLabel: false,
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            size={24}
            color={focused ? "#FFB71B" : "black"}
            name={focused ? "ios-home-sharp" : "ios-home-outline"}
          />
          <Text style={{ color: focused ? "#FFB71B" : "black", fontSize: 10 }}>
            Home
          </Text>
        </>
      ),
    },
  },
  {
    name: "Buys",
    component: LibraryScreen,
    options: {
      tabBarLabel: "Search",
      tabBarColor: "#fff",
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            size={26}
            color={focused ? "#FFB71B" : "black"}
            name={focused ? "ios-library" : "ios-library-outline"}
          />
          <Text style={{ color: focused ? "#FFB71B" : "black", fontSize: 10 }}>
            Buys
          </Text>
        </>
      ),
    },
  },
  {
    name: "Sell",
    component: DiscoverScreen,
    options: {
      tabBarLabel: "Upload",
      tabBarColor: "#fff",
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            size={26}
            color={focused ? "#FFB71B" : "black"}
            name={focused ? "ios-play-circle" : "ios-play-circle-outline"}
          />
          <Text style={{ color: focused ? "#FFB71B" : "black", fontSize: 10 }}>
            Sell
          </Text>
        </>
      ),
    },
  },
  {
    name: "History",
    component: ProfileScreen,
    options: {
      tabBarLabel: "Profile",
      tabBarColor: "#fff",
      tabBarIcon: ({ color, focused }) => (
        <>
          <Icon
            color={focused ? "#FFB71B" : "black"}
            name={focused ? "ios-person" : "ios-person-outline"}
            size={25}
          />
          <Text style={{ color: focused ? "#FFB71B" : "black", fontSize: 10 }}>
            History
          </Text>
        </>
      ),
    },
  },
];

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

const defaultRoutes = [
  {
    name: "LoginScreen",
    component: LoginScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "Home",
    component: HomeBottomTab,
    options: { headerShown: false, cardStyleInterpolator: forFade },
  },
  {
    name: "InitialScreen",
    component: InitialScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "SignUpScreen",
    component: SignUpScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },

  {
    name: "ListeningLevel",
    component: ListeningLevel,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "NetworkErrorScreen",
    component: NetworkErrorScreen,
    options: { headerShown: false, cardStyleInterpolator: forFade },
  },
  {
    name: "AudioBookViewScreen",
    component: AudioBookViewScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "AllCategories",
    component: AllCategories,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "CategoryScreen",
    component: CategoryScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "WishlistScreen",
    component: WishlistScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "SearchScreen",
    component: SearchScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "ReligionScreen",
    component: ReligionScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "EducationScreen",
    component: EducationScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "PANScreen",
    component: PANScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "CongoScreen",
    component: CongoScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "CongratulationsScreen",
    component: CongratulationsScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "JobsScreen",
    component: JobsScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "EmployersScreen",
    component: EmployersScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "JobDetailsScreen",
    component: JobDetailsScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "PreviewScreen",
    component: PreviewScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "HomePage",
    component: HomePage,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "SecondPage",
    component: SecondPage,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "ThirdPage",
    component: ThirdPage,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "FourthPage",
    component: FourthPage,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "FifthPage",
    component: FifthPage,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "CommunicationScreen",
    component: CommunicationScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },

  {
    name: "AnimationScreen",
    component: AnimationScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },

  {
    name: "LogoAnimationScreen",
    component: LogoAnimationScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "DrawerScreen",
    component: DrawerScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },

  {
    name: "SearchShopsScreen",
    component: SearchShopsScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "ProductsScreen",
    component: ProductsScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "PostedScreen",
    component: PostedScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },

  {
    name: "FamilyScreen",
    component: FamilyScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "ProScreen",
    component: ProScreen,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  {
    name: "Aboutus",
    component: Aboutus,
    options: { headerShown: false, cardStyleInterpolator: forSlide },
  },
  //   {
  //     name: "EditProfile",
  //     component: EditProfileScreen,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
  //   {
  //     name: "PurchaseHistory",
  //     component: PurchaseHistory,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
  //   {
  //     name: "DiscoverDetail",
  //     component: AudioDetail,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
  //   {
  //     name: "Search",
  //     component: Search,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
  //   {
  //     name: "CategoryScreen",
  //     component: CategoryScreen,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
  //   {
  //     name: "ListeningLevel",
  //     component: ListeningLevel,
  //     options: { headerShown: false, cardStyleInterpolator: forSlide },
  //   },
];

const unsubscribe = NetInfo.addEventListener((state) => {
  console.log("Connection type", state.type);
  if (!state.isConnected) {
    // NavigationService.navigate("NetworkErrorScreen");
    // console.log("Is connected?", state.isConnected);
  } else {
    // NavigationService.navigate("Home");
  }

  // console.log(net, "NET");
  console.log("Is connected?", state.isConnected);
});

const Stack = createStackNavigator();

const Navigator = (props) => {
  useEffect(() => {
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    // unsubscribe();

    return () => unsubscribe();
  }, [unsubscribe]);

  const netInfos = NetInfo.useNetInfo();

  // useEffect(() => {
  //   console.log(netInfos, "NETTTTTTTT");
  // }, [netInfos]);

  return (
    <NavigationContainer ref={navigationRef} animationEnabled>
      <Stack.Navigator initialRouteName="InitialScreen">
        {defaultRoutes.map((route, index) => {
          return <Stack.Screen {...route} key={`Stack_screen_${index}`} />;
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
