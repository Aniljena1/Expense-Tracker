import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WelcomeScreen() {
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>Authenctication successfully</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:32,
  },
  title:{
    
  }
})