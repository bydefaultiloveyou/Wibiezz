import { SafeAreaView } from "react-native-safe-area-context";
import color from "../configurations/color";
import {
  ScrollView,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { memo } from "react";
import { Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import VideoPlayer from "../components/videoPlayer";
import { useNavigation, useRoute } from "@react-navigation/native";

const StreamScreen = () => {
  const { data, episode } = useRoute().params;
  const navigatation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
      <StatusBar barStyle={"light-content"} />
      <VideoPlayer uri={episode.uri} />
      <ScrollView style={{ paddingHorizontal: 10, marginTop: 10 }}>
        {/* episode list */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 60, flexDirection: "row", marginVertical: 5 }}
        >
          {/* card */}
          {data.episode.map((eps, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: 50,
                  marginRight: 10,
                  height: 50,
                  marginTop: 5,
                  backgroundColor: color.grey,
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() =>
                  navigatation.navigate("stream", {
                    data: data,
                    episode: eps,
                  })
                }
              >
                <Text
                  style={{
                    fontFamily: "Poppins_400Regular",
                    fontSize: 16,
                    marginTop: 1,
                    color: episode.id === eps.id ? color.primary : color.white,
                  }}
                >
                  {eps.id}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>

        <View>
          <Text style={{ fontSize: 24, color: color.white }} numberOfLines={2}>
            {data.title}
          </Text>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Text style={{ marginLeft: 5, color: color.gray }}>
              23rb x ditonton
            </Text>
            <Text style={{ marginHorizontal: 5, color: color.gray }}>•</Text>
            <Text style={{ color: color.gray }}>
              {data.information.update_day}, {data.information.release}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 30,
            justifyContent: "space-around",
          }}
        >
          {/* like side */}
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                backgroundColor: color.grey,
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50,
              }}
            >
              <Entypo name="heart-outlined" size={20} color={color.white} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 8,
                backgroundColor: color.grey,
                width: 80,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderLeftWidth: 1,
                borderColor: color.black,
              }}
            >
              <Ionicons name="heart-dislike" size={20} color={color.white} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              paddingVertical: 8,
              backgroundColor: color.grey,
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              borderLeftWidth: 1,
              borderColor: color.black,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Octicons name="report" size={20} color={color.white} />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              paddingVertical: 8,
              backgroundColor: color.grey,
              width: 70,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              borderLeftWidth: 1,
              borderColor: color.black,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
            }}
          >
            <Ionicons name="bookmark-outline" size={20} color={color.white} />
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: color.white,
            fontSize: 20,
            fontFamily: "Poppins_400Regular",
            marginTop: 30,
          }}
        >
          Sinopsis
        </Text>
        <Text style={{ color: color.gray, lineHeight: 20 }}>
          {data.information.sinopsis}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default memo(StreamScreen);
