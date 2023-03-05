import {
  StyleSheet,
  Text,
  View,
  Modal,
  Keyboard,
  StatusBar,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";

const NoteInputModal = ({ visible, onClose, onSubmit }) => {
  const [Head, setHead] = useState("");
  const [Comment, setComment] = useState("");
  const handleClose = () => {
    Keyboard.dismiss();
  };
  const handleonChangeText = (text, value) => {
    if (value === "Head") setHead(text);
    if (value === "Comment") setComment(text);
  };
  const handlesubmit = () => {
    if (!Head.trim() && !Comment.trim()) return onClose();
    onSubmit(Head, Comment);
    setHead("");
    setComment("");
    onClose();
  };

  const closeModal = () => {
    setHead("");
    setComment("");
    onClose();
  };
  //   console.log(Head, Comment);
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#FF4F74"
      ></StatusBar>
      <Modal visible={visible} animationType="fade">
        <View style={styles.container}>
          <TextInput
            style={[styles.input, styles.Head]}
            placeholder="Head"
            value={Head}
            onChangeText={(text) => handleonChangeText(text, "Head")}
          />
          <TextInput
            style={[styles.input, styles.Comment]}
            multiline
            value={Comment}
            onChangeText={(text) => handleonChangeText(text, "Comment")}
            placeholder="Comment"
          />
          <View style={styles.btnContainer}>
            <AntDesign
              style={styles.Icon}
              name="check"
              size={50}
              color="white"
              onPress={handlesubmit}
            />
            {Head.trim() || Comment.trim() ? (
              <AntDesign
                style={[styles.Icon, { marginLeft: 15 }]}
                name="close"
                size={50}
                color="white"
                onPress={closeModal}
              />
            ) : null}
          </View>
        </View>
        <TouchableWithoutFeedback onPress={handleClose}>
          <View style={[styles.modalBG, StyleSheet.absoluteFillObject]}></View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default NoteInputModal;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: "pink",
    fontSize: 20,
    color: "tomato",
  },
  Head: {
    height: 40,
    marginBottom: 15,
    fontWeight: "bold",
  },
  Comment: {
    height: 100,
  },
  modalBG: {
    flex: 1,
    zIndex: -1,
    // backgroundColor: 'lime'
  },
  Icon: {
    borderRadius: 50,
    backgroundColor: "#FF4F74",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 15,
  },
});
