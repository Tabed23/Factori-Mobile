import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts} from '@/assets';

interface Props {
  customStyle: ViewStyle | any;
  textStyle: TextStyle | any;
  text: string;
  btnProps: any;
  check: string;
  icon:any
}

const RNButton = ({customStyle, textStyle, text, btnProps,check='auth',icon}: Props) => {
  return (
    <TouchableOpacity {...btnProps} activeOpacity={0.9} style={[styles.container,customStyle]}>
        {check=='auth'?
      <Text style={[styles.textStyle, textStyle]}>{text}</Text>
      :
      icon
      }
    </TouchableOpacity>
  );
};

export default RNButton;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(5),
    height: hp(6),
    borderRadius: wp(10),
    justifyContent:'center',
    backgroundColor:Colors.red,
    borderColor:Colors.red,
    borderWidth:1
   
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.semiBold,
    fontSize: FontSize.small,
  },
});
