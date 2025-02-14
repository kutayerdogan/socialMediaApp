import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {onboardingData} from '../../assets/data/onboarding';
import CustomButton from '../../components/Buttons/CustomButton';
import {VariantTypes} from '../../enums/VariantTypes';
import {ButtonStyles} from '../../enums/ButtonStyles';
import {ButtonStates} from '../../enums/ButtonStates';
import {Fonts} from '../../constants/Fonts';
import {Colors} from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { RouteNames } from '../../navigation/RouteNames';

const {width, height} = Dimensions.get('window');

const Onboarding = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const navigation = useNavigation();

  const handleScroll = (event: any) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={onboardingData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.slide}>
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
      {/* Pagination Indicator */}
      <View style={styles.indicatorContainer}>
        {onboardingData.map((_, index) =>
          currentIndex === index ? (
            <LinearGradient
              key={index}
              colors={['#FF4D67', '#FF8A9B']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={[styles.indicator, styles.activeIndicator]}
            />
          ) : (
            <View key={index} style={styles.indicator} />
          ),
        )}
      </View>
      <View style={styles.buttonsContainer}>
        <CustomButton
          variant={VariantTypes.Primary}
          buttonStyle={ButtonStyles.Rounded}
          state={ButtonStates.Active}
          text="Next"
          onPress={() => {
            if (currentIndex === onboardingData.length - 1) {
                navigation.navigate(RouteNames.WELCOME);
            } else {
              flatListRef.current?.scrollToIndex({
                index: currentIndex + 1,
              });
            }
          }}
        />
        <CustomButton
          variant={VariantTypes.Secondary}
          buttonStyle={ButtonStyles.Rounded}
          state={ButtonStates.Active}
          text="Skip"
          onPress={() => {
            navigation.navigate(RouteNames.WELCOME);
          }}
        />
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 24,
    marginBottom: 48,
  },
  slide: {
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
    gap: 20,
  },
  imageContainer: {
    width: width,
    aspectRatio: 307 / 260,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontFamily: Fonts.bold,
    color: Colors.greyscale[900],
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    fontFamily: Fonts.regular,
    color: Colors.greyscale[700],
    textAlign: 'center',
  },
  indicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 10,
    backgroundColor: Colors.greyscale[300],
    marginHorizontal: 5,
    marginVertical: 40,
  },
  activeIndicator: {
    width: 6,
  },
  buttonsContainer: {
    gap: 12,
    marginHorizontal: 24,
  },
});
