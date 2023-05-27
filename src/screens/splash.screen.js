import { StatusBar, View, Text, Image } from "react-native";
import { height, width } from "../configurations/screen";
import color from "../configurations/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SplashScreen = () => {
  const navigation = useNavigation();

  setTimeout(() => {
    AsyncStorage.getItem("isAuthenticated").then((value) => {
      if (value !== null) {
        navigation.navigate("home");
      } else {
        navigation.navigate("onboarding");
      }
    });
  }, 2000);

  return (
    <SafeAreaView
      style={{
        height: height,
        width: width,
        backgroundColor: color.black,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StatusBar barStyle={"light-content"} backgroundColor={color.black} />
      <View style={{ position: "relative", width: 130 }}>
        <View
          style={{
            top: 2,
            width: 130,
            height: 7,
            borderRadius: 50,
            backgroundColor: color.primary,
            position: "absolute",
            zIndex: 100,
          }}
        />
        <View
          style={{
            width: 7,
            height: 150,
            backgroundColor: color.primary,
            position: "absolute",
            left: 0,
            top: 2,
          }}
        />
        <View
          style={{
            width: 7,
            height: 150,
            backgroundColor: color.primary,
            position: "absolute",
            right: 0,
            top: 2,
          }}
        />
        <Image
          style={{ width: 100, height: 150, marginTop: 2, marginLeft: 15 }}
          source={{
            uri: "https://31.media.tumblr.com/763c3316020958083351d79146df4d0c/tumblr_mr3i30XBH61se2vfqo1_500.gif",
          }}
        />
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            color: color.white,
            fontSize: 24,
          }}
        >
          Wibiezz
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
