import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const CategoryScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EDEDED'}} >
      <View style={styles.container} >
        <View style={[styles.categorybox,{ backgroundColor: "#FCA186"}]}>
          <Text style={styles.textbox}>Education</Text>
        </View>
        <View style={[styles.categorybox,{backgroundColor:"#93D9FF"}]}>
          <Text style={styles.textbox}>Work</Text>
        </View>
        <View style={[styles.categorybox,{backgroundColor:"#FFADF6"}]}>
          <Text style={styles.textbox}>Party</Text>
        </View>
        <View style={[styles.categorybox,{backgroundColor:"#87DB8E"}]}>
          <Text style={styles.textbox}>Other</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CategoryScreen

const styles = StyleSheet.create({
  container:{
  flex: 1,
  marginHorizontal: 20,
  marginVertical: 30,
  flexDirection:'row',
  flexWrap: 'wrap'
},
  categorybox:{
    backgroundColor: 'lightblue',
    width:150,
    height:150,
    borderRadius:10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 12,
  },
  textbox:{
    color: '#FFFFF0',
    fontWeight: 'bold'
  }
})