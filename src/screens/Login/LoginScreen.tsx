import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../components/Header/CustomHeader';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import CustomInput from '../../components/Inputs/CustomInput';
import {InputTypes} from '../../enums/InputTypes';
import CustomButton from '../../components/Buttons/CustomButton';
import {VariantTypes} from '../../enums/VariantTypes';
import {ButtonStyles} from '../../enums/ButtonStyles';
import {StatusTypes} from '../../enums/StatusTypes';
import {ButtonStates} from '../../enums/ButtonStates';
import Checkbox from '../../components/Checkbox/Checkbox';

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.container}>
      <CustomHeader onBackPress={() => Alert.alert('Back Pressed')} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Login to your Account</Text>
      </View>
      <View style={styles.formContainer}>
        <CustomInput type={InputTypes.Email} />
        <CustomInput type={InputTypes.Password} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
          }}>
          <Checkbox
            checked={rememberMe}
            onPress={() => setRememberMe(!rememberMe)}
          />
          <Text style={styles.rememberMe}>Remember me</Text>
        </View>
        <CustomButton
          variant={VariantTypes.Secondary}
          buttonStyle={ButtonStyles.Rounded}
          state={ButtonStates.Disabled}
          text="Sign in"
          onPress={() => console.log('sign in')}
        />
        <TouchableOpacity onPress={() => console.log('Forgot password')}>
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.seperator}>
        <View style={styles.line}></View>
        <Text style={styles.orText}>or continue with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Facebook}
          state={ButtonStates.Active}
          onPress={() => console.log('Facebook')}
        />
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Google}
          state={ButtonStates.Active}
          onPress={() => console.log('Google')}
        />
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Apple}
          state={ButtonStates.Active}
          onPress={() => console.log('Apple')}
        />
      </View>
      <View style={styles.footerContainer}>
        <Text
          style={{
            color: Colors.greyscale[500],
            fontFamily: Fonts.medium,
            fontSize: 14,
          }}>
          Don't have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => console.log('Sign up')}>
          <Text
            style={{
              color: Colors.main.primary[500],
              fontFamily: Fonts.semibold,
              fontSize: 14,
            }}>
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 48,
    justifyContent: 'space-between',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontFamily: Fonts.bold,
    color: Colors.greyscale[900],
  },
  formContainer: {
    gap: 24,
  },
  seperator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginVertical: 8,
  },
  line: {
    width: '25%',
    height: 1,
    backgroundColor: Colors.greyscale[200],
  },
  orText: {
    fontFamily: Fonts.semibold,
    fontSize: 18,
    color: Colors.greyscale[700],
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  rememberMe: {
    fontFamily: Fonts.semibold,
    fontSize: 14,
    color: Colors.greyscale[900],
  },
  forgotPassword: {
    fontFamily: Fonts.semibold,
    fontSize: 16,
    color: Colors.main.primary[500],
    alignSelf: 'center',
  },
});
