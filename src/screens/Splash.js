import { StyleSheet, Text, View, Image, StatusBar } from "react-native";
import React from "react";
import { useFonts } from "expo-font";


const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.replace("Onboarding");
  }, 3000);
  let [fontsloaded] = useFonts({
    Domine: require("../../assets/fonts/Domine-Regular.ttf"),
  });
  if(!fontsloaded){
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F7F5F4"
      ></StatusBar>
      <Image
        style={styles.image}
        source={require("C:/Users/scarl/mob700-2/ProjectTodo/assets/logo.png")}
      />
      <Text style={{ fontFamily: "Domine", fontSize: 34 }}>Checkp</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F5F4",
  },
  image: {
    width: 70,
    height: 70,
  },
  textSplash: {
    padding: 5,
    fontSize: 34,
    color: "#1D121C",
    elevation: 20,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 4, height: 3 },
    textShadowRadius: 4,
  },
});
