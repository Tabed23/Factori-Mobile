import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import { Colors, FontSize, hp, wp } from '@/utils/variables';
import { Fonts, Icons } from '@/assets';

interface InputProps {
  inputProps: any;
  inputViewStyle: Object;
  inputStyle: Object;
  isRight: Boolean;
  isShow: Boolean;
  yup:any,
  onPress: () => void;
}

const RNInput = ({
  inputProps,
  inputViewStyle,
  inputStyle,
  isRight = false,
  isShow=false,
  yup,
  onPress,
}: InputProps) => {
  const [isSecure,setIsSecure] = useState(isShow);

  return (
    <View style={{marginBottom:hp(2)}}>
    <View style={[styles.inputViewStyle, inputViewStyle]}>
      <TextInput
   
        {...inputProps}
        secureTextEntry={isSecure}
        autoCapitalize='none'
        style={[
          styles.inputStyle,
          inputStyle,
          {
            width: isRight ? '70%' : '90%',
          },
        ]}
      />
      {isRight && (
        <TouchableOpacity
          style={{marginRight: wp(5), alignSelf: 'center'}}
          onPress={()=>setIsSecure(!isSecure)}>
          {isShow ? <Icons.eye/> : <Icons.eye />}
        </TouchableOpacity>
      )}

    </View>
    {yup?.touched && yup?.errors && (
                <Text style={styles.warningStyle}>{yup?.errors}</Text>
              )}
    </View>
  );
};

export default RNInput;

const styles={
    inputViewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: wp(5),
        height: hp(6),
        borderRadius: wp(10),
        borderColor: Colors.red,
        backgroundColor:Colors.red1,
        borderWidth: 0.3,
      },
      inputStyle: {
        color: Colors.white,
        marginHorizontal: wp(4),
        textAlignVertical: 'center',
        fontFamily: Fonts.regular,
        fontSize: FontSize.tiny,
      },
      warningStyle: {
        fontSize: FontSize.tiny,
        color: Colors.gray,
        marginLeft: wp(10),
      
      },
}
