import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons} from '../../constants/Icons';
import CustomHeader from '../../components/Header/CustomHeader';
import CustomButton from '../../components/Buttons/CustomButton';
import {Colors} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import { VariantTypes } from '../../enums/VariantTypes';
import { ButtonStyles } from '../../enums/ButtonStyles';
import { ButtonStates } from '../../enums/ButtonStates';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <CustomHeader onBackPress={() => console.log("onBackPress")}/>
      <View style={styles.iconContainer}>
        <Icons.welcome/>
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Let's you in</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Facebook}
          state={ButtonStates.Active}
          text="Continue with Facebook"
          onPress={() => console.log('Continue with Facebook')}
        />
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Google}
          state={ButtonStates.Active}
          text="Continue with Google"
          onPress={() => console.log('Continue with Google')}
        />
        <CustomButton
          variant={VariantTypes.Social}
          buttonStyle={ButtonStyles.Apple}
          state={ButtonStates.Active}
          text="Continue with Apple"
          onPress={() => console.log('Continue with Apple')}
        />
        <View style={styles.seperator}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>
        <CustomButton
          variant={VariantTypes.Primary}
          buttonStyle={ButtonStyles.Rounded}
          state={ButtonStates.Active}
          text="Sign in with password"
          onPress={() => console.log('Continue with Sign in with password')}
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

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 48,
  },
  iconContainer: {
    width: '100%',
    aspectRatio: 1.9333,
  },
  welcomeTextContainer: {
  },
  welcomeText: {
    fontFamily: Fonts.bold,
    fontSize: 40,
    textAlign: 'center',
    color: Colors.greyscale[900],
  },
  buttonsContainer: {
    gap: 16,
  },
  seperator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginVertical: 8,
  },
  line: {
    width: '40%',
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
  },
});
