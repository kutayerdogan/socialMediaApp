import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, Text, Button } from "react-native";
import { Colors } from "../../constants/Colors";
import { Fonts } from "../../constants/Fonts";
import { Icons } from "../../constants/Icons";
import { VariantTypes } from "../../enums/VariantTypes";
import { ButtonStyles } from "../../enums/ButtonStyles";
import { ButtonStates } from "../../enums/ButtonStates";

interface CustomButtonProps extends TouchableOpacityProps {
    variant?: VariantTypes;
    buttonStyle?: ButtonStyles;
    state?: ButtonStates;
    text?: string;
    onPress?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
    variant = VariantTypes.Primary,
    buttonStyle = ButtonStyles.Filled,
    state = ButtonStates.Active,
    text,
    onPress,
    style,
    ...props
}) => {
    const isDisabled = state === ButtonStates.Disabled;

    const getBackgroundColor = () => {
        if (isDisabled) {
            return Colors.alertStatus.buttonDisabled
        }

        return variant === VariantTypes.Primary 
            ? Colors.main.primary[500] 
            : variant === VariantTypes.Social
            ? Colors.others.white
            : Colors.main.primary[100];
    };

    const getTextColor = () => {
        return variant === VariantTypes.Secondary && !isDisabled
            ? Colors.main.primary[500] 
            : variant === VariantTypes.Social
            ? Colors.greyscale[900]
            : Colors.others.white;

    };

    const buttonStyles = [
        styles.button, 
        buttonStyle === ButtonStyles.Rounded && styles.rounded,
        variant === VariantTypes.Social && styles.social,
        { backgroundColor: getBackgroundColor() },
        style,
    ];

    const textStyles = [
        styles.text,
        { color: getTextColor() }
    ]

    const renderIcon = () => {
        switch (buttonStyle) {
            case ButtonStyles.Apple:
                return <Icons.apple/>
            case ButtonStyles.Google:
                return <Icons.google/>
            case ButtonStyles.Facebook:
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
            {variant === VariantTypes.Social ?
                <View style={{ flexDirection: 'row', alignItems: 'center' ,  gap: 12 }}>
                    {renderIcon()}
                    {text && <Text style={textStyles}>{text}</Text>}
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