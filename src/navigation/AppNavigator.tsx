import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';

const AppNavigator = () => {
  const navigation = useNavigation();
  

  const handleLogout = () => {
    firebase.auth().signOut().then(() => {
  }).catch((error) => {
    console.log(error);
  });
  }
    

  return (
    <View>
      <Text>AppNavigator</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})