import {Fonts} from '@/assets';
import {AppWrapper, RNButton} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import React from 'react';
import {StyleSheet, Text,  Linking,} from 'react-native';

interface Props{
  navigation:any;
}

const DocSignScreen = ({navigation}: Props) => {



  return (
    <AppWrapper>
      <Text style={styles.textStyle}>
        For Sign NDA{' '}
        <Text style={{color: Colors.red, textDecorationLine: 'underline'}}>
          Privacy Policy <Text style={{color: Colors.white}}>&</Text> Terms &
          Condition
         
        </Text>
      </Text>
      <Text style={[styles.textStyle, styles.clickStyle]} >
        Click on this link
      </Text>
      <Text style={[styles.textStyle, styles.linkStyle]}>www.docusign.com</Text>


      

      <RNButton text='Sign NDA' btnProps={{
        onPress:()=>   navigation.navigate('CategoryScreen')
      }} />
    </AppWrapper>
  );
};

export default DocSignScreen;

const styles = StyleSheet.create({
  textStyle: {
    flex:0.5,
    fontFamily: Fonts.regular,
    color: Colors.white,
    fontSize: FontSize.tiny,
    marginHorizontal: wp(5),
  textAlign:'center',
  textAlignVertical:'bottom',

    alignSelf: 'center',
    justifyContent:'center',
    alignItems:'center'
  },
  linkStyle: {
flex:0.2,
    color: Colors.red,
    textAlignVertical:'top',
    fontSize: FontSize.small,
    textDecorationLine: 'underline',
  },
  clickStyle: {
    flex:0.03,
    fontSize: FontSize.small,
    fontFamily: Fonts.medium,
    textAlignVertical:'center',
  },
  feeStyle: {color: Colors.red, fontFamily: Fonts.bold, fontSize: wp(5)},
});
