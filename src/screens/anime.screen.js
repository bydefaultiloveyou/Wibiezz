import { SafeAreaView } from "react-native-safe-area-context";
import color from "../configurations/color";
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";
import { height, width } from "../configurations/screen";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { memo } from "react";

const AnimeScreen = () => {
  const navigation = useNavigation();
  const { data } = useRoute().params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
      <StatusBar barStyle={"light-content"} backgroundColor={color.black} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={{
            uri: data.picture,
          }}
          style={{ width: width, height: height * 0.4 }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            activeOpacity={0.8}
            style={{
              top: 15,
              zIndex: 9999,
              left: 15,
              position: "absolute",
              paddingRight: 10,
              paddingLeft: 8,
              paddingVertical: 0,
              borderRadius: 50,
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: color.black,
            }}
          >
            <AntDesign name="caretleft" size={14} color={color.primary} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins_400Regular",
                color: color.primary,
                marginTop: 3,
              }}
            >
              &nbsp;Back
            </Text>
          </TouchableOpacity>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              zIndex: 999,
            }}
          >
            <View
              style={{
                width: width,
                paddingHorizontal: 15,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* information anime */}
              <View>
                {/* Container Bagde */}
                <View style={{ flexDirection: "row", marginBottom: 5 }}>
                  {/* badge */}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: color.red,
                      paddingHorizontal: 5,
                      paddingVertical: 2,
                      marginRight: 5,
                      borderRadius: 10,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome5
                      name="fire-alt"
                      size={16}
                      color={color.white}
                    />
                    <Text
                      style={{
                        marginTop: 2,
                        fontSize: 10,
                        color: color.white,
                        fontFamily: "Poppins_400Regular",
                      }}
                    >
                      &nbsp; Populer
                    </Text>
                  </View>

                  {/* badge */}
                  <View
                    style={{
                      flexDirection: "row",
                      backgroundColor: color.primary,
                      paddingHorizontal: 5,
                      marginRight: 5,
                      paddingVertical: 2,
                      borderRadius: 10,
                      alignItems: "center",
                    }}
                  >
                    <FontAwesome name="star" size={16} color={color.black} />
                    <Text
                      style={{
                        marginTop: 2,
                        marginRight: 5,
                        fontSize: 10,
                        color: color.black,
                        fontFamily: "Poppins_400Regular",
                      }}
                    >
                      &nbsp; {data.information.ranting}
                    </Text>
                  </View>
                </View>

                {/* title anime */}
                <Text
                  numberOfLines={2}
                  style={{
                    color: color.white,
                    fontSize: 32,
                  }}
                >
                  {data.title}
                </Text>
                <Text
                  numberOfLines={1}
                  style={{
                    marginTop: 2,
                    color: color.primary,
                  }}
                >
                  {data.information.kanji}
                </Text>
              </View>
            </View>
          </View>

          <LinearGradient
            style={{ width: "100%", height: "100%" }}
            colors={[
              "transparent",
              "rgba(26, 29, 38,.5)",
              "rgba(26, 29, 38,.9)",
              "rgba(26, 29, 38,1)",
            ]}
          />
        </ImageBackground>

        {/* description */}
        <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="star"
              size={16}
              color={color.primary}
              style={{ marginTop: 1 }}
            />
            <Text
              style={{
                color: color.gray,
                fontFamily: "Poppins_400Regular",
                marginLeft: 5,
              }}
            >
              TV {data.information.status} {data.information.release}
            </Text>
          </View>

          {/* genres Container */}
          <View
            style={{ flexDirection: "row", marginTop: 20, flexWrap: "wrap" }}
          >
            {/* badge */}
            {data.information.genres.map((genre, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  activeOpacity={0.9}
                  style={{
                    padding: 10,
                    marginRight: 10,
                    borderColor: color.primary,
                    borderWidth: 1,
                    backgroundColor: color.grey,
                    borderTopEndRadius: 20,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    marginBottom: 10,
                  }}
                >
                  <Text style={{ color: color.primary, fontWeight: 500 }}>
                    {genre}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>

          {/* button */}
          <View
            style={{
              flexDirection: "row",
              marginVertical: 15,
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: color.grey,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <MaterialCommunityIcons
                name="bell"
                size={20}
                color={color.white}
              />
              <Text
                style={{
                  color: color.white,
                  fontFamily: "Poppins_400Regular",
                  fontSize: 16,
                  marginTop: 3,
                }}
              >
                &nbsp; Subscribe
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: "48%",
                backgroundColor: color.primary,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <MaterialCommunityIcons
                name="calendar-clock"
                size={20}
                color={color.black}
              />
              <Text
                style={{
                  color: color.black,
                  fontFamily: "Poppins_400Regular",
                  fontSize: 16,
                  marginTop: 3,
                }}
              >
                &nbsp; {data.information.update_day}
              </Text>
            </TouchableOpacity>
          </View>

          {/* sinopsis */}
          <View style={{ marginTop: 10 }}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: "Poppins_400Regular",
                color: color.white,
              }}
            >
              Sinopsis
            </Text>
            <Text style={{ color: color.gray, lineHeight: 20 }}>
              {data.information.sinopsis}
            </Text>
          </View>

          {/* episode */}
          <View style={{ marginTop: 20, marginBottom: 30 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "Poppins_400Regular",
                  color: color.white,
                }}
              >
                {data.episode.length} Episode
              </Text>
              <TouchableOpacity>
                <MaterialIcons
                  name="filter-list"
                  size={32}
                  color={color.primary}
                />
              </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
              {data.episode.map((episode, index) => {
                return (
                  <CardEpisode data={data} key={index} episode={episode} />
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const CardEpisode = ({ data, episode }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("stream", { episode, data });
      }}
    >
      <View
        style={{
          marginBottom: 10,
          flexDirection: "row",
          height: 60,
          borderColor: color.gray,
          borderBottomWidth: 1,
          alignItems: "center",
          paddingHorizontal: 20,
          backgroundColor: color.grey,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: color.white,
              marginTop: 2,
              fontFamily: "Poppins_400Regular",
              marginRight: 20,
            }}
          >
            Epsiode &nbsp; {episode.id}
          </Text>
          <FontAwesome name="lock" size={14} color={color.gray} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default memo(AnimeScreen);
