import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";

import Home from "../Screens/Home";
import Favorites from "../Screens/Favorites";
import OrderHistory from "../Screens/OrderHistory";
import Cart from "../Screens/Cart";
import { COLORS } from "../theme/theme";
import { BlurView } from "expo-blur";

const Tabs = createBottomTabNavigator();

const Tab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => (
          <BlurView intensity={15} style={styles.blurViewStyle} />
        ),
      }}
    >
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="home"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="shopping-cart"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Favorite"
        component={Favorites}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialIcons
              name="favorite"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Order"
        component={OrderHistory}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <FontAwesome5
              name="history"
              size={25}
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: "absolute",
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
  },
  blurViewStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default Tab;
