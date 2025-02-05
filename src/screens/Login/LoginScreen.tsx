import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomButton from '../../components/Buttons/CustomButton'
import CustomInput from '../../components/Inputs/CustomInput'
import { InputTypes } from '../../enums/InputTypes'

const LoginScreen = () => {
  const [value, setValue] = useState('')
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Text style={{paddingTop: 50,}}>Login</Text>
      <CustomButton
        variant='primary'
        buttonStyle='rounded'
        state='disabled'
        text='Login'
        onPress={() => console.log('Login')}
        style={{marginTop: 20}}
      />
      <CustomButton
        variant='primary'
        buttonStyle='filled'
        state='active'
        text='Signup'
        onPress={() => Alert.alert('Signup')}
        style={{marginTop: 20}}
      />
      <CustomButton
        variant='social'
        buttonStyle='google'
        state='active'
        text='Forgot Password'
        onPress={() => Alert.alert('Forgot Password')}
      />
      <Text style={{color:'black'}}>dkslfdkkdlfs</Text>
      <CustomInput
        type={InputTypes.Password}
        value={value}
        onChangeText={setValue}
      />
      <CustomInput
        type={InputTypes.Email}
        value='dksds'
      />

    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})