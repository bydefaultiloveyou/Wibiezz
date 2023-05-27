import AsyncStorage from "@react-native-async-storage/async-storage";

// primary colora
const color = {
  primary: "#FFBF00",
  black: "#1A1D26",
  grey: "#222430",
  gray: "#8D9097",
  white: "#E9F8F9",
  red: "#ED2B2A",
};

// get color for primary color
AsyncStorage.getItem("color").then((value) => {
  if (value !== null) {
    color.primary = value;
  }
});

export default color;
