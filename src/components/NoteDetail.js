import { StyleSheet, Text, View, ScrollView, Alert } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNotes } from "../contexts/NoteProvider";
import NoteInputModal from "./NoteInputModal";

const formatDate = (ms) => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year} - ${hrs}:${min}:${sec}`;
};
const NoteDetail = (props) => {
  const [note, setNote] = React.useState(props.route.params.note);
  const { setNotes } = useNotes();
  const navigation = useNavigation();
  const [showModal, setshowModal] = React.useState(false);
  const [isEdit, setisEdit] = React.useState(false);

  const deleteNote = async () => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter((n) => n.id !== note.id);
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
    props.navigation.goBack();
  };

  const Alertdelete = () => {
    Alert.alert(
      "Are You Sure!",
      "This action will delete your note",
      [
        {
          text: "Delete",
          onPress: deleteNote,
        },
        {
          text: "No Thanks",
          onPress: () => console.log("no thanks"),
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  const handleUpdate = async (Head, Comment, time) => {
    const result = await AsyncStorage.getItem("notes");
    let notes = [];
    if (result !== null) notes = JSON.parse(result);

    const newNotes = notes.filter((n) => {
      if (n.id === note.id) {
        n.Head = Head;
        n.Comment = Comment;
        n.isUpdated = true;
        n.time = time;

        setNote(n);
      }
      return n;
    });
    setNotes(newNotes);
    await AsyncStorage.setItem("notes", JSON.stringify(newNotes));
  };
  const handleonClose = () => {
    setshowModal(false);
  };

  const openEdit = () => {
    setisEdit(true);
    setshowModal(true);
  };

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <MaterialIcons
          style={styles.AddIcon}
          name="arrow-back"
          size={30}
          color="black"
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.time}>
          {" "}
          {note.isUpdated
            ? `Updated At ${formatDate(note.time)}`
            : `Created At ${formatDate(note.time)}`}
        </Text>
        <Text style={styles.Head}>{note.Head}</Text>
        <Text style={styles.Comment}>{note.Comment}</Text>
      </ScrollView>
      <View style={styles.btnContainer}>
        <MaterialIcons
          style={styles.Icon}
          name="edit"
          size={40}
          color="black"
          onPress={openEdit}
        />
        <MaterialIcons
          style={[styles.Icon, { marginLeft: 30 }]}
          name="delete"
          size={40}
          color="black"
          onPress={Alertdelete}
        />
      </View>
      <NoteInputModal
        isEdit={isEdit}
        note={note}
        onClose={handleonClose}
        onSubmit={handleUpdate}
        visible={showModal}
      ></NoteInputModal>
    </>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    // backgroundColor: 'red',
    paddingTop: 15,
  },
  Head: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF4F74",
  },
  Comment: {
    fontSize: 20,
    opacity: 0.3,
  },
  time: {
    textAlign: "right",
    fontSize: 12,
    opacity: 0.5,
  },
  btnContainer: {
    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
  },
  Icon: {
    borderRadius: 50,
    backgroundColor: "#FF4F74",
    padding: 10,
  },
});
