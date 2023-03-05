import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const formatDate = ms => {
  const date = new Date(ms);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hrs = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();

  return `${day}/${month}/${year}`;
};
const Note = ({ item, onPress }) => {
    const {Head, Comment, time} = item
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text numberOfLines={2}style={styles.Head}>{Head}</Text>
      <Text numberOfLines={3} style={styles.Comment}>{Comment}</Text>
      <Text style={styles.time}>{formatDate(time)}</Text>
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
    },
    time:{
      opacity: 0.4,
      alignSelf: 'flex-end'
    }
})