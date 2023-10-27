import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useFonts } from "expo-font";

import Details from "./src/Screens/Details";
import Payments from "./src/Screens/Payments";
import Tab from "./src/navigators/Tab";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    poppins_black: require("./assets/fonts/Poppins-Black.ttf"),
    poppins_bold: require("./assets/fonts/Poppins-Bold.ttf"),
    poppins_extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    poppins_extralight: require("./assets/fonts/Poppins-ExtraLight.ttf"),
    poppins_light: require("./assets/fonts/Poppins-Light.ttf"),
    poppins_medium: require("./assets/fonts/Poppins-Medium.ttf"),
    poppins_regular: require("./assets/fonts/Poppins-Regular.ttf"),
    poppins_semibold: require("./assets/fonts/Poppins-Thin.ttf"),
    poppins_thin: require("./assets/fonts/Poppins-Thin.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tabs"
          component={Tab}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
        <Stack.Screen
          name="Payment"
          component={Payments}
          options={{ animation: "slide_from_bottom" }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
