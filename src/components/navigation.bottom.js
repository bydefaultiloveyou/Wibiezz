import { View, TouchableOpacity } from "react-native";
import color from "./../configurations/color";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const NavigationBottom = () => {
  const screenName = useRoute();

  return (
    <View
      style={{
        color: color.grey,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        style={screenName.name === "home" ? style.focus : ""}
        onPress={() => console.log("hello world")}
      >
        <Entypo name="home" size={24} color={color.primary} />
      </TouchableOpacity>

      <TouchableOpacity>
        <FontAwesome5 name="clipboard-list" size={24} color={color.primary} />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons
          name="clock-outline"
          size={24}
          color={color.primary}
        />
      </TouchableOpacity>

      <TouchableOpacity>
        <MaterialCommunityIcons name="bell" size={24} color={color.primary} />
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  focus: {
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: 50,
    height: 50,
    paddingBottom: 3,
    backgroundColor: color.grey,
  },
});

export default NavigationBottom;
