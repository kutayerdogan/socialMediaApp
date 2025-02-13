import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {View} from 'react-native';

const RootNavigation = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
    });

    return subscriber;
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaWrapper user={user} />
    </SafeAreaProvider>
  );
};

const SafeAreaWrapper = ({user}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom, backgroundColor: 'white'}}>
      <NavigationContainer theme={{colors: {background: 'white'}}}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </View>
  );
};

export default RootNavigation;
