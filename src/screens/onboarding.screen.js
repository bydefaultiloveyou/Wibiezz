import {
  FlatList,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { height, width } from "../configurations/screen";
import { SafeAreaView } from "react-native-safe-area-context";
import color from "../configurations/color";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import useColorStore from "../hook/color";
import * as google from "expo-auth-session/providers/google";
import googleKey from "./../configurations/google.key";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import useUserStore from "../hook/user";

WebBrowser.maybeCompleteAuthSession();

// bagian pemulaan
const WelcomeSide = ({ colorHook }) => {
  return (
    <View style={{ width: width }}>
      <View
        style={{
          height: height * 0.75,
          width: width,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <AntDesign
          name="heart"
          size={80}
          color={colorHook.primary === null ? color.primary : colorHook.primary}
          style={{ marginBottom: 10 }}
        />
        <Text
          style={{
            color: color.white,
            marginBottom: 10,
            fontSize: 32,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Selamat Datang di Wibiezz
        </Text>
        <TouchableOpacity
          style={{
            width: 80,
            borderRadius: 50,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: color.white,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              color: color.white,
              lineHeight: 27,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// bagian pemilihan warna
const ColorSide = ({ colorHook }) => {
  return (
    <View style={{ width: width }}>
      <StatusBar backgroundColor={color.black} />
      <View
        style={{
          height: height * 0.75,
          width: width,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <Ionicons
          name="md-color-palette-sharp"
          style={{ marginBottom: 10 }}
          size={80}
          color={colorHook.primary === null ? color.primary : colorHook.primary}
        />

        <Text
          style={{
            color: color.white,
            fontSize: 32,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Pilihlah Warna Kesukaanmu
        </Text>

        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => colorHook.setPrimaryColor("#F7C04A")}
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#F7C04A",
              borderRadius: 50,
              borderColor: color.white,
              borderWidth: colorHook.primary === "#F7C04A" ? 2 : 0,
              marginRight: 10,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => colorHook.setPrimaryColor("#537FE7")}
            style={{
              backgroundColor: "#537FE7",
              borderRadius: 50,
              marginRight: 10,
              borderColor: color.white,
              borderWidth: colorHook.primary === "#537FE7" ? 2 : 0,
              width: 40,
              height: 40,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => colorHook.setPrimaryColor("#F45050")}
            style={{
              backgroundColor: "#F45050",
              borderRadius: 50,
              marginRight: 10,
              borderColor: color.white,
              borderWidth: colorHook.primary === "#F45050" ? 2 : 0,
              width: 40,
              height: 40,
            }}
          />
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => colorHook.setPrimaryColor("#9E4784")}
            style={{
              backgroundColor: "#9E4784",
              borderRadius: 50,
              marginRight: 10,
              borderColor: color.white,
              borderWidth: colorHook.primary === "#9E4784" ? 2 : 0,
              width: 40,
              height: 40,
            }}
          />
        </View>

        <TouchableOpacity
          style={{
            width: 80,
            borderRadius: 50,
            paddingVertical: 5,
            borderWidth: 1,
            borderColor: color.white,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Poppins_400Regular",
              color: color.white,
              lineHeight: 27,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// login side
const LoginSide = ({ colorHook }) => {
  const [token, setToken] = useState("");
  const navigation = useNavigation();
  const user = useUserStore();

  const [_, response, promptAsync] = google.useAuthRequest({
    expoClientId: googleKey.web,
    androidClientId: googleKey.android,
    iosClientId: googleKey.ios,
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      getUserInfo();
      navigation.navigate("home");
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      user.setUser(data.name, data.email, data.picture);
      AsyncStorage.setItem("isAuthenticated", "ok");
      AsyncStorage.setItem("name", data.name || user.name);
      AsyncStorage.setItem("email", data.email || user.email);
      AsyncStorage.setItem("picture", data.picture || user.picture);
      AsyncStorage.setItem("color", colorHook.primary);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <View style={{ width: width }}>
      <View
        style={{
          height: height * 0.75,
          width: width,
          justifyContent: "center",
          paddingHorizontal: 20,
        }}
      >
        <MaterialCommunityIcons
          name="shield-sword"
          style={{ marginBottom: 10 }}
          size={80}
          color={colorHook.primary === null ? color.primary : colorHook.primary}
        />

        <Text
          style={{
            color: color.white,
            marginBottom: 10,
            fontSize: 32,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Hubungan Akun dan Mulai Berpetualang
        </Text>
        <TouchableOpacity
          onPress={() => promptAsync()}
          style={{
            marginBottom: 20,
            flexDirection: "row",
            alignItems: "center",
            width: "55%",
            backgroundColor: color.white,
            borderRadius: 50,
          }}
        >
          <Image
            style={{ width: 60, height: 60 }}
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png",
            }}
          />
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 24,
              color: color.black,
            }}
          >
            Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// credit side
const Credit = () => {
  return (
    <View style={{ marginBottom: 40 }}>
      <Text
        style={{
          color: color.white,
          textAlign: "center",
          fontFamily: "Poppins_300Light",
        }}
      >
        Dibuat Dengan &nbsp;
        <AntDesign
          name="heart"
          size={12}
          color={color.primary}
          style={{ marginBottom: 10 }}
        />
        &nbsp; oleh
      </Text>
      <Text
        style={{
          color: color.white,
          textAlign: "center",
          fontFamily: "Poppins_300Light",
        }}
      >
        Akane Projects
      </Text>
    </View>
  );
};

const OnBoardingScreen = () => {
  const colorHook = useColorStore();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
      <FlatList
        data={[
          <WelcomeSide colorHook={colorHook} />,
          <ColorSide colorHook={colorHook} />,
          <LoginSide colorHook={colorHook} />,
        ]}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => item}
      />
      <Credit />
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
