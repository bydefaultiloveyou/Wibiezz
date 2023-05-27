import AsyncStorage from "@react-native-async-storage/async-storage";

// information user
const userData = {
  name: "",
  email: "",
  picture:
    "https://planetsains.com/wp-content/uploads/2022/09/anonymous-avatar-icon-25.png",
};

AsyncStorage.getItem("name").then((value) => {
  userData.name = value;
});

AsyncStorage.getItem("email").then((value) => {
  userData.email = value;
});

AsyncStorage.getItem("picture").then((value) => {
  userData.picture = value;
});

export default userData;
