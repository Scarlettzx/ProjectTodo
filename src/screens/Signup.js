import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
        Name: "",
        Email: "",
        Password: "",
      },
  });
  const SignInPressed = (data) => {
    AsyncStorage.setItem('userData', JSON.stringify(data));
    const dataNew = JSON.stringify(data)
    console.log(dataNew);
    console.log(typeof(dataNew));
    navigation.navigate("Signin", {dataNew});
  };

  let [fontsloaded] = useFonts({
    Biryani: require("../../assets/fonts/Biryani-Light.otf"),
    BRegular: require("../../assets/fonts/Biryani-Regular.otf"),
    AKAsara: require("../../assets/fonts/aksarabaligalang-regular.ttf"),
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
        source={require("../../assets/bgRegister.png")}
      ></ImageBackground>
      <View
        style={{
          flex: 5,
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "tomato",
        }}
      >
        <Text style={styles.Headercontainer}>Sign Up</Text>

        {/* NAME TEXTINPUT */}
        <View style={styles.Tinputcontainer}>
          <MaterialIcons
            name="person"
            size={24}
            color="#B3B3B3"
            style={styles.Ticon}
          />
          <Text style={styles.Tinputsub}></Text>
          <Controller
            control={control}
            name="Name"
            rules={{
              required: "Name is required",
            }}
            render={({
              field: { onChange, value, onBlur },
              fieldState: { error },
            }) => (
              <TextInput
                style={styles.Tinputbox}
                placeholder="Name"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          ></Controller>
        </View>
        {/* Check error from rule and output error */}
        {errors.Name && (
          <View style={styles.errorm}>
            <Text style={{ color: "red" }}>{errors.Name.message}</Text>
          </View>
        )}
        {/* EMAIL TEXTINPUT */}
        <View style={styles.Tinputcontainer}>
          <MaterialIcons
            name="email"
            size={24}
            color="#B3B3B3"
            style={styles.Ticon}
          />
          <Text style={styles.Tinputsub}></Text>
          <Controller
            control={control}
            name="Email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                message: "Email is incorrect",
              },
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.Tinputbox}
                placeholder="Email"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
              />
            )}
          ></Controller>
        </View>
        {/* Check error from rule and output error */}
        {errors.Email && (
          <View style={styles.errorm}>
            <Text style={{ color: "red" }}>{errors.Email.message}</Text>
          </View>
        )}
        {/* PASSWORD TEXTINPUT */}
        <View style={styles.Tinputcontainer}>
          <MaterialIcons
            name="lock"
            size={24}
            color="#B3B3B3"
            style={styles.Ticon}
          />
          <Text style={styles.Tinputsub}></Text>
          <Controller
            control={control}
            name="Password"
            rules={{
              required: "Password is required",
            }}
            render={({ field: { onChange, value, onBlur } }) => (
              <TextInput
                style={styles.Tinputbox}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                secureTextEntry
              />
            )}
          ></Controller>
        </View>
        {/* Check error from rule and output error */}
        {errors.Password && (
          <View style={styles.errorm}>
            <Text style={{ color: "red" }}>{errors.Password.message}</Text>
          </View>
        )}
        <TouchableOpacity
          style={styles.Bsignup}
          onPress={handleSubmit(SignInPressed)}
        >
          <Text style={styles.Tsignup}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row', marginVertical: 20}}>
          <Text style={{color: "#6D798E", fontSize: 14,fontFamily: 'BRegular', fontWeight: '400'}}>Already have an account?  </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: '#5082D2', fontSize: 16,fontFamily: 'BRegular', fontWeight: 'bold'}}> Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F5F4",
  },
  Tinputcontainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#EAEAEA",
    borderRadius: 22,
    width: 331,
    height: 57,
    marginTop: 23,
  },
  Tinputsub: {
    borderColor: "#D5D5D5",
    fontSize: 30,
    fontStyle: "normal",
    borderLeftWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    margin: 8,
  },
  Tinputbox: {
    width: 270,
    height: 57,
    borderRadius: 22,
  },
  Ticon: {
    paddingStart: 20,
  },
  Headercontainer: {
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#040404",
    // paddingBottom: 25
  },
  Bsignup: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    height: 62,
    width: 344,
    backgroundColor: "#F14C6E",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#B35064",
  },
  Tsignup: {
    color: "#F7F5F4",
    fontSize: 18,
    fontFamily: "Biryani",
    fontWeight: "800",
  },
  errorm: {
    alignSelf: "flex-start",
    marginHorizontal: 65,
  },
});
