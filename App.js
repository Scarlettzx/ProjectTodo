import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Splash from "./src/screens/Splash";
import Onboarding from "./src/screens/Onboarding";
import Letyouin from "./src/screens/Letyouin";
import Signup from "./src/screens/Signup";
import Signin from "./src/screens/Signin";
import { AntDesign } from '@expo/vector-icons';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Bottomtab from "./src/screens/Bottomtab";
import CustomDrawer from "./src/components/CustomDrawer";
import NoteDetail from "./src/components/NoteDetail";
import NoteProvider from "./src/contexts/NoteProvider";
import IndexScreen from "./src/screens/IndexScreen";
import Ionic from 'react-native-vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import CategoryScreen from "./src/screens/CategoryScreen";
import Aboutme from "./src/screens/Aboutme";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return(
    <Drawer.Navigator 
    useLegacyImplementation={true}
    drawerContent={props => <CustomDrawer {...props}/>}
    screenOptions={{
      headerTitle: '',
      headerShown: true,
      headerStyle:{
        backgroundColor: 'rgba(247, 82, 116, 1)',
        elevation: 0,
        shadowOpacity: 0,
      },
      drawerActiveBackgroundColor: '#FF4F74',
      drawerActiveTintColor: "#fff",
      drawerInactiveTintColor: "#FFF",
      drawerLabelStyle:{
          marginLeft:-25,
          fontSize: 15,
        },
    }}>
      <Drawer.Screen name="Home " component={Bottomtab} 
        options={{drawerIcon: ({color}) => (
          <Ionic name="home" size={22} color={color} />
        )
        }}/>
      <Drawer.Screen name="Index" component={IndexScreen}
        options={{drawerIcon: ({color}) => (
          <MaterialCommunityIcons name="mailbox" size={24} color={color} />
        )
        }}
      />
      <Drawer.Screen name="Category" component={CategoryScreen} 
        options={{drawerIcon: ({color}) => (
          <MaterialIcons name="category" size={24} color={color} />
        )
        }}
      />
      <Drawer.Screen name="Aboutme" component={Aboutme} 
        options={{drawerIcon: ({color}) => (
          <AntDesign name="sharealt" size={24} color={color} />
        )
        }}
      />
    </Drawer.Navigator>
  )
}
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
        <Stack.Screen name="Bottomtab" component={MyDrawer} />
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
