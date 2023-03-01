import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { Controller } from "react-hook-form";
const CustomInput = ({control, name, placeholder, secureTextEntry, style, rule}) => {
  return (
    <View>
    <Text style={styles.Tinputsub}></Text>
    <Controller
      control={control}
      name={name}
      rules={rule}
      render={({field: {onChange, value, onBlur}}) => (
        <TextInput
          style={styles.Tinputbox}
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          secureTextEntry={secureTextEntry}
        />
      )}
    ></Controller>
  </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
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
})