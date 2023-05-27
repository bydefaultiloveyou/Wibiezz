import { SafeAreaView } from "react-native-safe-area-context";
import color from "../configurations/color";
import { ScrollView, StatusBar } from "react-native";

const CatalogScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: color.black }}>
      <StatusBar backgroundColor={color.black} />
      <ScrollView></ScrollView>
    </SafeAreaView>
  );
};

export default CatalogScreen;
