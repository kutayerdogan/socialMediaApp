import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icons } from '../../constants/Icons'
import { Colors } from '../../constants/Colors'
import { Fonts } from '../../constants/Fonts'

interface CustomHeaderProps{
    onBackPress?: () => void;
    title: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
    onBackPress,
    title
}) => {
  return (
    <View style={{flexDirection: 'row', gap: 16, alignItems: 'center'}}>
      <View>
        <TouchableOpacity onPress={onBackPress}>
            <Icons.arrowLeft/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}


export default CustomHeader

const styles = StyleSheet.create({
    backContainer: {
    },
    title: {
        fontSize: 24,
        fontFamily: Fonts.bold,
        color: Colors.greyscale[900],
    }
})