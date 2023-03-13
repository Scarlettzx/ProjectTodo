import React from "react";
import {View, Text, ImageBackground, Image} from 'react-native'
import { DrawerContentScrollView,DrawerItemList, } from "@react-navigation/drawer";
import Ionic from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
const CustomDrawer = (props) => {
    const navigation = useNavigation();
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
    return (
        <View style={{flex:1,backgroundColor:"rgba(54, 53, 53, 1)"}}>
         <DrawerContentScrollView {...props} 
         contentContainerStyle={{backgroundColor:'rgba(54, 53, 53, 1)'}}>
            <ImageBackground source={require('../../assets/leaf.jpg')} style={{padding:10}}>
                <Image 
                source={require('../../assets/Profile.png')} 
                style={{height:80,width:80,borderRadius:40,marginBottom:10}}/>      
            <Text style={{color:'#FFFF',fontSize:18,fontWeight:'bold'}}>{userDetails?.Name}</Text>
            </ImageBackground>
            <View style={{flex:1,backgroundColor:'rgba(54, 53, 53, 1)',paddingTop:10}}>
                <DrawerItemList {...props} />    
            </View>    
        </DrawerContentScrollView>
            <View style={{padding:20, borderTopWidth:15, borderTopColor:"#FF4F74"}}>
                <TouchableOpacity style={{paddingVertical:15}} onPress={logout}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <FontAwesome name="sign-out" size={24} color="#FFFF" />
                        <Text style={{
                            color: '#FFFF',
                            fontSize:15,
                            marginLeft: 5,
                            }}>Sign Out</Text>
                        </View>
                </TouchableOpacity>
            </View> 
        </View>
    )
}

export default CustomDrawer