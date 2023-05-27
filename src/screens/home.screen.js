import { useCallback, useState } from "react";
import {
  Text,
  Image,
  StatusBar,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  BackHandler,
} from "react-native";
import color from "../configurations/color";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import AnimeContainer from "../components/animecontainer.home";
import NavigationBottom from "../components/navigation.bottom";
import useUserStore from "../hook/user";
import userData from "../configurations/user";
import { useFocusEffect } from "@react-navigation/native";

const HomeScreen = () => {
  const [component, setComponent] = useState("anime");
  const user = useUserStore();

  useFocusEffect(
    useCallback(() => {
      const handleButton = () => {
        BackHandler.exitApp();
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", handleButton);
      return () => {
        BackHandler.removeEventListener("hardwareBackPress", handleButton);
      };
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
      <StatusBar backgroundColor={color.black} />
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          {/* welcome screen */}
          <View
            style={{
              flexDirection: "row",
              marginTop: 50,
              paddingVertical: 20,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: user.picture || userData.picture,
                }}
                style={{ width: 50, height: 50, borderRadius: 50 }}
              />
              <View style={{ paddingHorizontal: 10 }}>
                <Text
                  style={{
                    color: color.white,
                    opacity: 0.6,
                  }}
                >
                  Welcome
                </Text>
                <Text
                  style={{
                    color: color.primary,
                    fontSize: 20,
                    fontFamily: "Poppins_300Light",
                  }}
                >
                  {user.name || userData.name}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={{ paddingHorizontal: 10 }}>
              <FontAwesome name="gear" size={32} color={color.primary} />
            </TouchableOpacity>
          </View>

          {/* search components */}
          <TouchableOpacity onPress={() => console.log("hello world")}>
            <TextInput
              placeholder={"Cari Anime"}
              placeholderTextColor={"#8D9097"}
              editable={false}
              style={{
                fontFamily: "Poppins_300Light",
                position: "relative",
                backgroundColor: color.grey,
                height: 50,
                borderRadius: 5,
                fontSize: 16,
                paddingLeft: 50,
              }}
            />
            <FontAwesome
              name="search"
              size={24}
              color={color.primary}
              style={{ position: "absolute", top: 11, left: 15, opacity: 0.8 }}
            />
          </TouchableOpacity>

          {/* navigator component */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginVertical: 20,
            }}
          >
            <TouchableOpacity onPress={() => setComponent("anime")}>
              <Text
                style={{
                  color: component === "anime" ? color.primary : color.white,
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                }}
              >
                Anime
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setComponent("musik")}>
              <Text
                style={{
                  color: component === "musik" ? color.primary : color.white,
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 18,
                }}
              >
                Musik
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* render component */}
        {component === "anime" ? <AnimeContainer /> : <Text>Musik</Text>}
      </ScrollView>
      <NavigationBottom />
    </SafeAreaView>
  );
};

export default HomeScreen;
