import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Aboutme = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textname,{fontSize: 30}]}>รายชื่อกลุ่ม</Text>
      <Text style={styles.textname}>นายพิชญะ เรือนทอง 6321600156</Text>
      <Text style={styles.textname}>นายปัญญาวุฒิ แก้วอ่ำ 6321602655</Text>
      <Text style={styles.textname}>นายปฏิเวธ คงเชื้อนาค 6321610054</Text>
    </View>
  )
}

export default Aboutme

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textname:{
        fontSize: 17,
        fontWeight: 'bold',
        paddingBottom: 10,
    },
})