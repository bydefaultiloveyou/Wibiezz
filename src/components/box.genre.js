import { Text, TouchableOpacity, View } from "react-native";
import color from "../configurations/color";

const BoxGenre = ({ icon, title }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        marginRight: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: color.grey,
        height: 120,
        width: 100,
        borderRadius: 10,
      }}
    >
      {icon}
      <Text
        style={{
          color: color.gray,
          fontFamily: "Poppins_300Light",
          marginTop: 10,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default BoxGenre;
