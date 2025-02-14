import {
  TextInputProps,
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import {Icons} from '../../constants/Icons';
import {Colors} from '../../constants/Colors';
import {Fonts} from '../../constants/Fonts';
import {FunctionComponent, useState} from 'react';
import {InputTypes} from '../../enums/InputTypes';
import {StatusTypes} from '../../enums/StatusTypes';


interface CustomInputProps extends TextInputProps {
  type?: InputTypes;
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
  const [status, setStatus] = useState<StatusTypes>(StatusTypes.Default);

  const handleFocus = () => setStatus(StatusTypes.Active);
  const handleBlur = () => {
    const newStatus = value ? StatusTypes.Fill : StatusTypes.Default;
    setStatus(newStatus);
  };
  const renderIcon = () => {
    let Icon = null;

    switch (type) {
      case InputTypes.Username || InputTypes.Default:
        Icon = Icons.profile;
        break;
      case InputTypes.Email:
        Icon = Icons.mail;
        break;
      case InputTypes.Password:
        Icon = Icons.lock;
        break;
    }
    return Icon ? <Icon color={getIconColor()} style={[styles.logo]} /> : null;
  };

  const placeHolderText = () => {
    switch (type) {
      case InputTypes.Username:
        return 'Username';
      case InputTypes.Email:
        return 'Email';
      case InputTypes.Password:
        return 'Password';
      default:
        return;
    }
  };

  const getBackgroundColor = () => {
    return status === StatusTypes.Active ? '#FF4D6714' : Colors.greyscale[50];
  };

  const getBorder = () => {
    return status === StatusTypes.Active
      ? Colors.main.primary[500]
      : 'transparent';
  };

  const getIconColor = () => {
    switch (status) {
      case StatusTypes.Active:
        return Colors.main.primary[500];
      case StatusTypes.Fill:
        return Colors.greyscale[900];
      default:
        return Colors.greyscale[500];
    }
  };

  return (
    <View
      style={[
        styles.inputContainer,
        {backgroundColor: getBackgroundColor(), borderColor: getBorder()},
      ]}>
      {renderIcon()}
      <TextInput
        style={styles.input}
        placeholder={placeHolderText()}
        secureTextEntry={type === InputTypes.Password && isPasswordHidden}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {type === InputTypes.Password && (
        <TouchableOpacity
          onPress={() => setIsPasswordHidden(!isPasswordHidden)}>
          <Icons.hide style={[styles.rightLogo, {color: getIconColor()}]} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
});
