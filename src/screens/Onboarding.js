import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";

const Onboarding = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={{ width: 393, height: 720, flex: 1, borderTopColor: "red" }}
        source={{
          uri: "https://innovationinpolitics.eu/wp-content/uploads/2020/05/marcos-paulo-prado-tcyW6Im5Uug-unsplash-1365x2048.jpg",
        }}
      ></ImageBackground>
      {/* <Text>dsds</Text> */}
      <View
        style={{
          flex: 0.4,
          flexDirection: "column",
          margin: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 34,
            fontFamily: "Roboto",
            textAlign: "center",
            color: "white",
            paddingBottom: 7,
          }}
        >
          WELCOME TO CHECKP! 🌈
        </Text>
        <Text
          style={{ color: "white", textAlign: "center", paddingBottom: 30 }}
        >
          the best todolist & planner app
        </Text>
        <TouchableOpacity
          style={{
            alignItems: "center",
            borderRadius: 50,
            height: "32%",
            width: "75%",
            backgroundColor: "#F75274",
            paddingTop: 15,
          }}
          onPress={() =>{ navigation.navigate('Letyouin')}}
        >
          <Text style={{ color: "white", fontSize: 18 }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#FFFF",
    // paddingHorizontal: 16,
  },
});

// <View style={styles.container}>
//   {/* <StatusBar style='auto'/> */}
//   <View style={{flex: 3,backgroundColor: '#ddd', flexDirection:'column'}}>
//   {/* <ImageBackground
//   resizeMode="cover"
//     style={{ width: 550, height: 720,
//       flex: 1}}
//     source={{uri:'https://innovationinpolitics.eu/wp-content/uploads/2020/05/marcos-paulo-prado-tcyW6Im5Uug-unsplash-1365x2048.jpg'}}
//   ></ImageBackground> */}
//   </View>
//   {/* <Text>this is OnboardingScreen</Text> */}
// </View>
