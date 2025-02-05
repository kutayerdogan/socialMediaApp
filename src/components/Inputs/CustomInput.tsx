import { TextInputProps, View, Text, StyleSheet, TextInput, Touchable, TouchableOpacity } from "react-native";
import { Icons } from "../../constants/Icons";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { FunctionComponent, useState } from "react";
import { SvgFromXml, SvgProps } from "react-native-svg";
import { InputTypes } from "../../enums/InputTypes";

type StatusType = 'default' | 'active' | 'fill';


interface CustomInputProps extends TextInputProps {
    type?: InputTypes,
    value?: string;
    onChangeText?: (text: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
    type = InputTypes.Default,
    value,
    onChangeText,
    ...props
}) => {

    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [status, setStatus] = useState<StatusType>(InputTypes.Default);

    const handleFocus = () => setStatus('active');
    const handleBlur = () => {
        const newStatus = value ? 'fill' : 'default';
        setStatus(newStatus);
    }
    const renderIcon = () => {
        let Icon = null;

        switch (type) {
            case 'username' || 'normal':
                Icon = Icons.profile;
                break;
            case 'email':
                Icon = Icons.mail;
                break;
            case 'password':
                Icon = Icons.lock;
                break;
        }
        return Icon ? <Icon color={getIconColor()} style={[styles.logo]} /> : null;
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
        height: '100%',
    },
    rightLogo: {
        width: 20,
        height: 20,
        paddingRight: 20,
        paddingLeft: 12,
        color: Colors.greyscale[500],
    }
})