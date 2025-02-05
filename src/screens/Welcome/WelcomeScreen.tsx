import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icons } from '../../constants/Icons'
import CustomHeader from '../../components/Header/CustomHeader'

const WelcomeScreen = () => {
  return (
    <View style={{paddingTop: 50}}>
      <Text>WelcomeScreen</Text>
      <CustomHeader title='Header'/>
      <View style={styles.welcomeContainer}>
        <Icons.welcome style={styles.icon}/>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    welcomeContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    icon: {
        

    }
})