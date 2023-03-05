import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
const Signin = ({ navigation },DataNew) => {
  const DataLogin = JSON.stringify(DataNew);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Name: "",
      Email: "",
      Password: "",
    },
  });
  let [fontsloaded] = useFonts({
    Biryani: require("../../assets/fonts/Biryani-Light.otf"),
    BRegular: require("../../assets/fonts/Biryani-Regular.otf"),
    AKAsara: require("../../assets/fonts/aksarabaligalang-regular.ttf"),
  });
  if (!fontsloaded) {
    return null;
  }
  const SignInPressed = async (data) => {
    let userData = await AsyncStorage.getItem("userData");
      userData = JSON.parse(userData);
      console.log(userData);
      console.log(typeof userData);
      if (data.Email == userData.Email && data.Password == userData.Password) {
        navigation.navigate('Bottomtab');
        AsyncStorage.setItem(
          'userData',
          JSON.stringify({...userData, loggedIn: true}),
        );
      } else{
        Alert.alert('Error','SignIn fail Please Try Again')
      }
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
        source={require("../../assets/bgLogin.png")}
      ></ImageBackground>
      <View
        style={{
          flex: 5,
          flexDirection: "column",
          alignItems: "center",
          // backgroundColor: "tomato",
        }}
      >
        <Text style={styles.Headercontainer}>Sign In</Text>
        <Text style={styles.Headercontainer}>{DataLogin.Email}</Text>
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
      </View>
    </View>
  );
};

export default Signin;

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
// {
//   navigation.navigate("HomeScreen");
//   AsyncStorage.setItem(
//     "userData",
//     JSON.stringify({ ...userData})
//   );
// }
