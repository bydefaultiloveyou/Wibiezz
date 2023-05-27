import { TouchableOpacity, Text, View, ImageBackground } from "react-native";
import color from "../configurations/color";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Card = ({ data, horizontal }) => {
  const navigatation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigatation.navigate("anime", { data })}
      style={{ width: 105, marginBottom: 10, marginRight: horizontal ? 10 : 0 }}
    >
      <ImageBackground
        source={{
          uri: data.picture,
        }}
        style={{
          width: "100%",
          height: 150,
          backgroundColor: color.grey,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        {/* New indicator */}
        <Text
          style={{
            backgroundColor: color.primary,
            position: "absolute",
            paddingHorizontal: 10,
            borderBottomRightRadius: 10,
            color: color.grey,
            paddingTop: 2,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          New
        </Text>

        <Text
          style={{
            backgroundColor:
              data.information.status === "End" ? "#B73E3E" : color.grey,
            position: "absolute",
            paddingHorizontal: 10,
            bottom: 5,
            zIndex: 999,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            color:
              data.information.status === "End" ? color.white : color.primary,
            fontFamily: "Poppins_600SemiBold",
            paddingTop: 2,
          }}
        >
          {data.information.status === "End" ? "End" : "Eps 1"}
        </Text>

        {/* gradient */}
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.6)"]}
          style={{ width: "100%", height: "100%" }}
        />
      </ImageBackground>
      <View style={{ marginVertical: 5 }}>
        <Text numberOfLines={2} style={{ color: color.white }}>
          {data.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
