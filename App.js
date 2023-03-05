import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import Letyouin from "./src/screens/Letyouin";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottomtab from "./src/screens/Bottomtab";
import NoteDetail from "./src/components/NoteDetail";
import NoteProvider from "./src/contexts/NoteProvider";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <NoteProvider>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerTintColor: "rgba(255, 255, 255, 1)",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "rgba(255, 79, 116, 1)",
          },
        }}
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Letyouin" component={Letyouin} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Bottomtab" component={Bottomtab} />
        <Stack.Screen name="NoteDetail" component={NoteDetail}/>
      </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
};

export default App;

// const styles = StyleSheet.create({
//   root: { backgroundColor: 'lightblue', height:'100%', width:'100%'}
// });
