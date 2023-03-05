import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import { useFonts } from "expo-font";

const Letyouin = ({ navigation }) => {
  let [fontsloaded] = useFonts({
    Biryani: require("../../assets/fonts/Biryani-Light.otf"),
    BRegular: require('../../assets/fonts/Biryani-Regular.otf'),
    AKAsara: require("../../assets/fonts/aksarabaligalang-regular.ttf")
  });
  if (!fontsloaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#F7F5F4"
      ></StatusBar>
      <ImageBackground
        resizeMode="stretch"
        style={{ width: 393, height: 720, flex: 1 }}
        source={require("../../assets/bgLetyouin.png")}
      ></ImageBackground>
      <View
        style={{
          flex: 4,
          flexDirection: "column",
          alignItems: "center",
          // paddingBottom: 20,
          // backgroundColor: "tomato",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: "700", fontFamily: "Roboto" }}>
          Let's you in
        </Text>
        <View style={{ 
          // backgroundColor: "lime", 
           }}>
          <TouchableOpacity style={styles.BContinue}>
            <Text style={styles.TContinue}>Continue With Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BContinue}>
            <Text style={styles.TContinue}>Continue With Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.BContinue}>
            <Text style={styles.TContinue}>Continue With Line</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 15,
        // backgroundColor:'red'
        }}>
          <Text style={[styles.Tsub,{fontWeight: 'bold'}]}> ____________________ </Text>
          <Text style={[styles.Tsub,{color:'dimgray'}]}>or</Text>
          <Text style={[styles.Tsub,{fontWeight: 'bold'}]}> ____________________ </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: 'center',
            borderRadius: 40,
            height: 62,
            width: 344,
            backgroundColor: "#F75274",
            marginTop: 15,
            borderWidth: 1,
            borderColor: "#CD4F69"
          }}
          onPress={() =>{ navigation.navigate('Signin')}}
        >
          <Text style={{ color: "#F7F5F4", fontSize: 18,fontFamily: 'Biryani', fontWeight:'800'}}>Sign in With Password</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginVertical: 30}}>
          <Text style={{color: "#6D798E", fontSize: 14,fontFamily: 'BRegular', fontWeight: '400', paddingStart: 25}}>Don’t have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: '#5082D2', fontSize: 16,fontFamily: 'BRegular', fontWeight: 'bold'}}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Letyouin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F5F4",
  },
  BContinue: {
    width: 331,
    height: 57,
    borderWidth: 1,
    borderRadius: 22,
    backgroundColor: "#F7F5F4",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(213, 212, 212, 0.7)",
    marginTop: 32,
  },
  TContinue: {
    fontWeight: "300",
    fontSize: 14,
    fontFamily: "Biryani",
  },
  Tsub:{
    fontFamily: "AKAsara",
    fontSize: 14,
    color: 'rgba(218, 214, 214, 0.7)'
  },
  Icon:{
    width: 20,
    height: 20
  }
});
