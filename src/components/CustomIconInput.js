import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
const CustomIconInput = ({ icon, size, color, style }) => {
  return (
    <View>
      <MaterialIcons
        name={icon}
        size={size}
        color={color}
        style={style}
      />
    </View>
  );
};

export default CustomIconInput;

const styles = StyleSheet.create({});
