import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";
const SettingScreen = ({ navigation }) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      "userData",
      JSON.stringify({ ...userDetails, loggedIn: false })
    );
    navigation.navigate("Splash");
  };

  let [fontsloaded] = useFonts({
    Biryani: require("../../assets/fonts/Biryani-Light.otf"),
    BRegular: require("../../assets/fonts/Biryani-Regular.otf"),
    AKAsara: require("../../assets/fonts/aksarabaligalang-regular.ttf"),
    BiryaniBold: require("../../assets/fonts/Biryani-Bold.otf"),
  });
  if (!fontsloaded) {
    return null;
  }
  return (
    <View style={{ backgroundColor: "red", flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FF4F74"
      ></StatusBar>
      <View
        style={{ backgroundColor: "#FF4F74", flex: 1, alignItems: "center" }}
      >
        <Text style={styles.Headcontainer}>Setting</Text>
        <View style={styles.Subcontainer}>
          <Image source={require("../../assets/Profile.png")}></Image>
          <Text style={styles.SubText}>{userDetails?.Name}</Text>
          <TouchableOpacity onPress={logout}>
            <Image source={require("../../assets/log-out.png")}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#EDEDED", flex: 3 }}>
        <View style={styles.Box}>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>Profile</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
        </View>
        <View style={[styles.Box, { height: 165, marginVertical: 0, paddingVertical: 10}]}>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>ลักษณะ</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>Sound & Notifications</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>General</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>Date & Time</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
        </View>
        <View style={[styles.Box, { height: 165, marginVertical: 20, paddingVertical: 10}]}>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>ศูนย์ช่วยเหลือ</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>Feedback</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>Follow Us</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
          <View style={styles.LayoutBox}>
            <Text style={styles.TextinBox}>เกี่ยวกับ</Text>
            <Text style={styles.forward}>
              <Ionicons name="chevron-forward-sharp" size={27} color="black" />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  Headcontainer: {
    fontFamily: "Biryani",
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    letterSpacing: 0.7,
  },
  Subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  SubText: {
    fontFamily: "Biryani",
    fontSize: 32,
    fontWeight: "700",
    color: "white",
  },
  Box: {
    backgroundColor: "#E2DEDE",
    marginVertical: 18,
    width: 346,
    height: 57,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 19,
    paddingHorizontal: 45,
  },
  LayoutBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  TextinBox: {
    fontFamily: "BiryaniBold",
    fontWeight: "600",
    fontSize: 16,
    paddingTop: 5
  },
  forward: {
    marginHorizontal: -20,
    paddingTop: 5
  },
});
