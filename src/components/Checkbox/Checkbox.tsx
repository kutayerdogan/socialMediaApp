import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons} from '../../constants/Icons';

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
}

const Checkbox: React.FC<CheckboxProps> = ({checked, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {checked ? <Icons.checkbox.true /> : <Icons.checkbox.empty />}
    </TouchableOpacity>
  );
};

export default Checkbox;
