import { useEffect, useState } from "react"
import auth from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const RootNavigation = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            setUser(user);
        });

        return subscriber;
    }, []);

    return (
        <NavigationContainer>
            {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    );
};

export default RootNavigation;