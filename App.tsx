import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Details from "./src/Screens/Details";
import Payments from "./src/Screens/Payments";
import Tab from "./src/navigators/Tab";

const Stack = createNativeStackNavigator();

export default function App() {
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
