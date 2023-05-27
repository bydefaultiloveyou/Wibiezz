import { Text, View } from "react-native";
import color from "../configurations/color";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text
        style={{
          paddingVertical: 10,
          fontFamily: "Poppins_700Bold",
          color: color.white,
          fontSize: 20,
        }}
      >
        {title}
      </Text>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text
          style={{
            marginTop: 2,
            color: color.white,
            fontFamily: "Poppins_600SemiBold",
          }}
        >
          Selengkapnya
        </Text>
        <MaterialIcons
          name="keyboard-arrow-right"
          size={24}
          color={color.white}
        />
      </View>
    </View>
  );
};

export default Header;
