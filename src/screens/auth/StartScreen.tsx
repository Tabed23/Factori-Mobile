import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RNButton, RNHeader, RNInput} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts, Icons} from '@/assets';


interface Props{
    navigation:any;
}

const StartScreen = ({navigation}:Props) => {
  return (
    <View style={styles.container}>
      <RNHeader
        text={['Privacy', 'Login']}
        check="auth"
        btnProps={[
          {onPress: () => console.log('Left Press')},
          {onPress: () => navigation.navigate('LoginScreen')},
        ]}
        style={[
          styles.btnStyle,styles.btnStyle
        ]}
      />
      <Icons.logo alignSelf="center" marginTop={hp(4)} marginBottom={hp(8)} />

      <Text style={styles.create}>
        Create <Text style={styles.account}>Account</Text>
      </Text>

      <View style={{marginBottom: hp(3)}}>
        <RNButton text="Creater" />
      </View>
      <RNButton text="Investor" />
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.bgColor},
  btnStyle:{
    backgroundColor: 'transparent',borderWidth:0
  },
  create: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: FontSize.large,
    marginBottom: hp(6),
  },
  account: {
    color: Colors.red,
    fontFamily: Fonts.bold,
  },

});
