import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  TextInput,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { useFonts } from "expo-font";
import NoteDetails from "../components/NoteInputModal";
import Note from "../components/Note";
// import { Modal ,Pressable } from "react-native";

const HomeScreen = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const [userDetails, setUserDetails] = React.useState();
  const [notes, setNotes] = React.useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem("notes");
    console.log(result);
    if (result !== null) setNotes(JSON.parse(result));
  };

  React.useEffect(() => {
    getUserData();
    findNotes();
  }, []);
  const getUserData = async () => {
    const userData = await AsyncStorage.getItem("userData");
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
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

  const handleonSubmit = async (Head, Comment) => {
    // const time = new Date().getTime()
    const note = { id: Date.now(), Head, Comment, time: Date.now() };
    const updateNotes = [...notes, note];
    setNotes(updateNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(updateNotes));
  };

  const openNote = (note) =>{
    navigation.navigate('NoteDetail',{note})
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FF4F74"
      ></StatusBar>
      <View
        style={{ backgroundColor: "#FF4F74", flex: 1, alignItems: "center" }}
      >
        <View style={styles.Subcontainer}>
          <Image
            style={{ marginBottom: -15 }}
            source={require("../../assets/Profile.png")}
          ></Image>
          <Text style={styles.SubText}>{userDetails?.Name}</Text>
        </View>
      </View>
      <View style={{ backgroundColor: "#EDEDED", flex: 3,marginTop: 5}}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Note onPress={() => {openNote(item)}} item={item} />}
        />
        {!notes.length ?
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeaderContainer]}
        >
          <Text style={styles.emptyHeader}>Add Notes</Text>
        </View>: null}
      </View>
      <AntDesign
          style={styles.AddIcon}
          name="pluscircle"
          size={50}
          color="rgba(246, 63, 101, 1)"
          onPress={() => setVisible(true)}
        />
      <NoteDetails
        visible={visible}
        onClose={() => setVisible(false)}
        onSubmit={handleonSubmit}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Subcontainer: {
    alignItems: "center",
    width: "100%",
    // backgroundColor:'tomato',
  },
  SubText: {
    letterSpacing: 0.5,
    marginEnd: 20,
    // marginBottom: 15,
    fontFamily: "Biryani",
    fontSize: 17,
    fontWeight: "700",
    color: "white",
    // backgroundColor:'red'
  },
  AddIcon: {
    position: "absolute",
    left: 320,
    bottom: 20,
  },
  emptyHeaderContainer: {
    flex: 1,
    zIndex: -1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyHeader: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "bold",
    opacity: 0.2,
  },
});
