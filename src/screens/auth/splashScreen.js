import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import LottieView from 'lottie-react-native';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts} from '@/assets';

interface Props {
  navigation: any;
}

const SplashScreen = ({navigation}: Props) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 3600);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../../assets/svgs/Json.json')}
        autoPlay
        loop
        style={{flex: 1}}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.bgColor},
});
