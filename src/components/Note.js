import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Note = ({ item, onPress }) => {
    const {Head, Comment} = item
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text numberOfLines={2}style={styles.Head}>{Head}</Text>
      <Text numberOfLines={3} style={styles.Comment}>{Comment}</Text>
    </TouchableOpacity>
  )
}

export default Note

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        margin: 5,
        padding: 10,
        borderRadius: 15,
        backgroundColor: '#FFFFFF'
    },
    Head:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'#FF4F74'
    },
    Comment:{
        opacity: 0.4
    }
})