import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const NoteDetail = (props) => {
  const { note } = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AntDesign
        style={styles.AddIcon}
        name="banckward"
        size={50}
        color="rgba(246, 63, 101, 1)"
        onPress={() => navigation.goBack()}
      />
      <Text>{note.Head}</Text>
      <Text>{note.Comment}</Text>
    </View>
  );
};

export default NoteDetail;

const styles = StyleSheet.create({});
