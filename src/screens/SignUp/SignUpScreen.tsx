import {
  Alert,
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import {RouteNames} from '../../navigation/RouteNames';
import {firebase} from '@react-native-firebase/auth';

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailCheck = () => {
    return email.includes('@') && email.includes('.');
  };

  const passwordCheck = () => {
    return password.length >= 6;
  };

  const isDisabled = () => {
    return !emailCheck() || !passwordCheck();
  };
  // firebase
  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        Alert.alert('Account created successfully');      })
      .catch(error => {
        Alert.alert(error.message);
      });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <CustomHeader onBackPress={() => navigation.goBack()} />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Create your Account</Text>
        </View>
        <KeyboardAwareScrollView
          style={{flex: 1, gap: 24, paddingTop: 24}}
          contentContainerStyle={{justifyContent: 'space-between', gap: 24}}
          keyboardShouldPersistTaps="handled">
          <View style={styles.formContainer}>
            <CustomInput
              type={InputTypes.Email}
              value={email}
              onChangeText={setEmail}
            />
            <CustomInput
              type={InputTypes.Password}
              value={password}
              onChangeText={setPassword}
            />
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
              variant={
                isDisabled() ? VariantTypes.Secondary : VariantTypes.Primary
              }
              buttonStyle={ButtonStyles.Rounded}
              state={isDisabled() ? ButtonStates.Disabled : ButtonStates.Active}
              text="Sign up"
              onPress={handleSignUp}
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
            <TouchableOpacity
              onPress={() => navigation.navigate(RouteNames.SIGNUP)}>
              <Text
                style={{
                  color: Colors.main.primary[500],
                  fontFamily: Fonts.semibold,
                  fontSize: 14,
                }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SignUpScreen;

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
    paddingTop: 24,
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
