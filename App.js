import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import OnBoardingScreen from "./src/screens/onboarding.screen";
import {
  Poppins_600SemiBold,
  Poppins_400Regular,
  Poppins_300Light,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import HomeScreen from "./src/screens/home.screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import AnimeScreen from "./src/screens/anime.screen";
import SplashScreen from "./src/screens/splash.screen";
import StreamScreen from "./src/screens/stream.screen";
import CatalogScreen from "./src/screens/catalog.screen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="splash" component={SplashScreen} />
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="onboarding" component={OnBoardingScreen} />
        <Stack.Screen name="anime" component={AnimeScreen} />
        <Stack.Screen name="stream" component={StreamScreen} />
        <Stack.Screen name="catalog" component={CatalogScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
