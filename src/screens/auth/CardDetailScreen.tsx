import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RNButton, RNHeader, RNInput} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts, Icons} from '@/assets';
import {Formik} from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoading } from '@/store/loading';
import Toast from 'react-native-simple-toast';
import { CardDetailsInterface } from '@/utils/formik/interfaces';
import { CardDetailValidation } from '@/utils/formik/validation';
import { useAddCardMutation } from '@/services/modules/user';

interface Props {
  navigation: any;
}

const CardDetailScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {user} = useSelector(state=>state.local)
  const [addCard,{isSuccess,isError,isLoading,error}] = useAddCardMutation()


  const handelAddCard=async(values:any)=>{

 await addCard(values)

  }

  if(isSuccess){
    navigation.navigate('LoginScreen');
    Toast.showWithGravity(
      'Card is added.',
      Toast.LONG,
      Toast.BOTTOM,
    );
  }
  if(isError){
    Toast.showWithGravity(
      error?.data?.message,
      Toast.LONG,
      Toast.BOTTOM,
    );
  }
  
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <Icons.logo alignSelf="center" marginTop={hp(8)} marginBottom={hp(8)} />

      <Text style={[styles.create, {fontSize: FontSize.large}]}>
        Card <Text style={styles.account}>Details</Text>
      </Text>

      <Formik
        initialValues={CardDetailsInterface}
        validationSchema={CardDetailValidation}
        onSubmit={(v, {resetForm}) => {
        handelAddCard(v)
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          const {cardName,cardNumber,expireDate,ccv, password} = values;
          return (
            <>
      <RNInput
        inputProps={{
          placeholder: 'Card holder name',
          placeholderTextColor: Colors.gray,
          onChangeText: handleChange('cardName'),
          onBlur: handleBlur('cardName'),
          value: cardName,
        }}
        yup={{touched:touched?.cardName,errors:errors?.cardName}}
        inputViewStyle={{marginBottom: hp(2)}}
      />
      <RNInput
        inputProps={{
          placeholder: 'Enter card number',
          placeholderTextColor: Colors.gray,
          onChangeText: handleChange('cardNumber'),
          onBlur: handleBlur('cardNumber'),
          maxLength:16,
          value: cardNumber,
        }}
        yup={{touched:touched?.cardNumber,errors:errors?.cardNumber}}
        inputViewStyle={{marginBottom: hp(2)}}
      />
      <RNInput
        inputProps={{
          placeholder: 'Create password',
          placeholderTextColor: Colors.gray,
   
          onChangeText: handleChange('password'),
          onBlur: handleBlur('password'),
          value: password,
        }}
        yup={{touched:touched?.password,errors:errors?.password}}
        inputViewStyle={{marginBottom: hp(2)}}
        isRight={true}
        isShow={true}
      />

      <View style={styles.miniContainer}>
        <RNInput
          inputProps={{
            placeholder: 'Expiration Date',
            placeholderTextColor: Colors.gray,
            maxLength:5,
            onChangeText: handleChange('expireDate'),
            onBlur: handleBlur('expireDate'),
            value: expireDate,
          }}
          // yup={{touched:touched?.expireDate,errors:errors?.expireDate}}
          inputViewStyle={{width: wp(50)}}

         
        />
        <RNInput
          inputProps={{
            placeholder: 'CCV',
            placeholderTextColor: Colors.gray,
            maxLength:3,
            onChangeText: handleChange('ccv'),
            onBlur: handleBlur('ccv'),
            value: ccv,
          }}
          // yup={{touched:touched?.ccv,errors:errors?.ccv}}
          inputViewStyle={{width: wp(30)}}

          //  isShow={false}
        />
      </View>

      <View style={{marginVertical: hp(5)}}>
        <RNButton text="Done" btnProps={{
         // onPress:()=>navigation.navigate('LoginScreen')
         onPress:handleSubmit
        }}/>
      </View>

      </>
          );
        }}
      </Formik>
</ScrollView>
    </View>
  );
};

export default CardDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.bgColor},

  create: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: FontSize.small,
    marginBottom: hp(7),
    marginHorizontal: wp(5),
  },
  account: {
    color: Colors.red,
    fontFamily: Fonts.bold,
  },
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
});
