import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'

const IndexScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EDEDED'}} >
      <View style={styles.container} >
        <Text>indexScreen</Text>
      </View>
    </SafeAreaView>  
  )
}

export default IndexScreen

const styles = StyleSheet.create({container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},})