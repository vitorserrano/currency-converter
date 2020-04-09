import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Convertions from "./pages/Convertions";

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Convertions" component={Convertions} />
      </AppStack.Navigator>

    </NavigationContainer>
  );
}
