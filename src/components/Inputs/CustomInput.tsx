import { TextInputProps, View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native";
import { Icons } from "../../constants/Icons";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { useState } from "react";

interface CustomInputProps extends TextInputProps {
    type?: 'default' | 'username' | 'email' | 'password' | 'normal' | 'phone' | 'code',
    value?: string;
    onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
    type = 'default',
    value,
    onChangeText,
    ...props
}) => {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [status, setStatus] = useState<'default' | 'active' | 'fill'>('default');

    const handleFocus = () => setStatus('active');
    const handleBlur = () => {
        const newStatus = value ? 'fill' : 'default';
        setStatus(newStatus);
    }
    const renderIcon = () => {
        switch (type) {
            case 'username' || 'normal':
                return <Icons.profile style={[styles.logo, {color: getIconColor()}]}/>
            case 'email':
                return <Icons.mail style={[styles.logo, {color: getIconColor()}]}/>
            case 'password':
                return <Icons.lock style={[styles.logo, {color: getIconColor()}]}/>
            default:
                return 
        }
    }

    const placeHolderText = () => {
        switch (type) {
            case 'username':
                return 'Username'
            case 'email':
                return 'Email'
            case 'password':
                return 'Password'
            default:
                return 
        }
    }

    const getBackgroundColor = () => {
        return status === 'active' 
            ? '#FF4D6714'
            : Colors.greyscale[50];
    }

    const getBorder = () => {
        return status === 'active' 
            ? Colors.main.primary[500]
            : 'transparent';
    }

    const getIconColor = () => {
        switch (status) {
            case 'active':
                return Colors.main.primary[500]
            case 'fill':
                return Colors.greyscale[900]
            default:
                return Colors.greyscale[500];
        }
    }

    return (
        <View style={[styles.inputContainer, {backgroundColor: getBackgroundColor(), borderColor: getBorder()}]}>
            {renderIcon()}
            <TextInput
                style={styles.input}
                placeholder={placeHolderText()}
                secureTextEntry={type === 'password' && isPasswordHidden}
                value={value}
                onChangeText={onChangeText}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...props}
                
            />
            {type === 'password' && 
            <TouchableOpacity onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
                <Icons.hide style={[styles.rightLogo, {color: getIconColor()}]} />
            </TouchableOpacity>
            }
        </View>
    )
}

export default CustomInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        height: 58,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'transparent',
    },
    logo: {
        width: 20,
        height: 20,
        paddingLeft: 20,
        paddingRight: 12,
    },
    input: {
        flex: 1, 
        paddingRight: 20,
        fontFamily: Fonts.medium,
        fontSize: 14,
        color: Colors.greyscale[900],
    },
    rightLogo: {
        width: 20,
        height: 20,
        paddingRight: 20,
        paddingLeft: 12,
        color: Colors.greyscale[500],
    }
})