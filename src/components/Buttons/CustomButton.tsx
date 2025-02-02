import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, Text } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { Icons } from "../../constants/Icons";

interface CustomButtonProps extends TouchableOpacityProps {
    variant?: 'primary' | 'secondary' | 'social';
    buttonStyle?: 'filled' | 'rounded' | 'apple' | 'google' | 'facebook';
    state?: 'active' | 'disabled';
    text?: string;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    variant = 'primary',
    buttonStyle = 'filled',
    state = 'active',
    text,
    onPress,
    style,
    ...props
}) => {
    const isDisabled = state === 'disabled';

    const getBackgroundColor = () => {
        if (isDisabled) {
            return Colors.alertStatus.buttonDisabled
        }

        return variant === 'primary' 
            ? Colors.main.primary[500] 
            : variant === 'social'
            ? Colors.others.white
            : Colors.main.primary[100];
    };

    const getTextColor = () => {
        return variant === 'secondary' 
            ? Colors.main.primary[500] 
            : variant === 'social'
            ? Colors.greyscale[900]
            : Colors.others.white;

    };

    const buttonStyles = [
        styles.button, 
        buttonStyle === 'rounded' && styles.rounded,
        variant === 'social' && styles.social,
        { backgroundColor: getBackgroundColor() },
        style,
    ];

    const textStyles = [
        styles.text,
        { color: getTextColor() }
    ]

    const renderIcon = () => {
        switch (buttonStyle) {
            case 'apple':
                return <Icons.apple/>
            case 'google':
                return <Icons.google/>
            case 'facebook':
                return <Icons.facebook/>
            default:
                return null;
        }
    }

    return (
        <TouchableOpacity
            style={buttonStyles}
            onPress={onPress}
            disabled={isDisabled}
            {...props}
        >
            {variant === 'social' ?
                <View style={{ flexDirection: 'row', alignItems: 'center' , gap: 12 }}>
                    {renderIcon()}
                    <Text style={textStyles}>{text}</Text>
                </View>
                :
                <Text style={textStyles}>{text}</Text>
                    
            }
        </TouchableOpacity>
    )
}

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        paddingVertical: 18,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rounded: {
        borderRadius: 100,
    },
    social: {
        borderWidth: 1,
        borderColor: Colors.greyscale[200],
    },
    text: {
        fontFamily: Fonts.bold,
        fontSize: 16,
    }
})