import {
  FlatList,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Animated,
} from "react-native";
import BoxGenre from "./box.genre";
import { genreDatas } from "../data/genre.d";
import color from "../configurations/color";
import Header from "./header";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import Card from "./card";
import { width } from "../configurations/screen";
import { useState } from "react";
import { useRef } from "react";
import animeListData from "./../data/anime.d";
import animeD from "./../data/anime.d";

const AnimeContainer = () => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start(() => {
      animatedValue.setValue(0);
    });
  };

  const spin = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      {/* Genre List Component */}
      <FlatList
        data={genreDatas}
        horizontal
        contentContainerStyle={{ paddingHorizontal: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <BoxGenre icon={item.icon} title={item.title} />
        )}
      />

      {/* header anime new */}
      <View
        style={{ marginVertical: 20, paddingHorizontal: 20, marginTop: 30 }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Poppins_700Bold",
                color: color.white,
                fontSize: 20,
                marginRight: 5,
              }}
            >
              Anime Terbaru
            </Text>
            <TouchableOpacity activeOpacity={1} onPress={startAnimation}>
              <Animated.View style={{ transform: [{ rotate: spin }] }}>
                <MaterialCommunityIcons
                  name="refresh"
                  size={28}
                  color={color.primary}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: color.white,
                  marginTop: 2,
                  fontFamily: "Poppins_600SemiBold",
                }}
              >
                Jadwal rilis
              </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={color.white}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* container anime new */}
      <View
        style={{
          paddingHorizontal: 10,
          width: width,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}
      >
        {animeListData.map((item, index) => {
          return <Card data={item} key={index} />;
        })}
      </View>

      {/* anime populer */}
      <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
        <Header title={"Anime Populer"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {animeListData.map((item, index) => {
            return <Card data={item} key={index} horizontal={true} />;
          })}
        </ScrollView>
      </View>

      {/* anime populer */}
      <View style={{ paddingHorizontal: 20, marginTop: 5 }}>
        <Header title={"Anime Tamat"} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {animeListData.map((item, index) => {
            return <Card data={item} key={index} horizontal={true} />;
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default AnimeContainer;
