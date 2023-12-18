import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppWrapper, RNButton, RNHeader, RNInput} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts, Icons} from '@/assets';
import { useCreateUserMutation } from '@/services/modules/user';
import {Formik} from 'formik';
import { SignupInterface } from '@/utils/formik/interfaces';
import { SignupValidation } from '@/utils/formik/validation';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '@/store/loading';
import Toast from 'react-native-simple-toast';


interface Props {
  navigation: any;
}

interface value{
  name:string,
  email:string;
  password:string;
}

const SignupScreen = ({navigation}: Props) => {

  const dispatch = useDispatch();
  const [createUser,{isError,isLoading,isSuccess,error}] = useCreateUserMutation();

  useEffect(()=>{
    dispatch(setIsLoading(isLoading))
},[isLoading])


// calling register mutation
const handleSignup = async (value:value,resetForm:any) => {
 
   const obj ={
    name:value.name,
    email:value.email,
    password:value.password
}
    await createUser(obj);

};


if(isSuccess){
  // navigation.navigate('CardDetailScreen')
  navigation.goBack()
  Toast.showWithGravity(
    'User successfully created.',
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
   <AppWrapper>
      <Icons.logo alignSelf="center" marginTop={hp(8)} marginBottom={hp(8)} />

      <Text style={[styles.create, {fontSize: FontSize.large}]}>
        Create <Text style={styles.account}>Account</Text>
      </Text>
      <Formik
        initialValues={SignupInterface}
        validationSchema={SignupValidation}
        onSubmit={(v, {resetForm}) => {
        // handleSignup(v,resetForm);
       // navigation.goBack()
       navigation.navigate('CategoryScreen')
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          const {name,email, password} = values;
          return (
            <>
      <RNInput
        inputProps={{
          placeholder: 'Enter your name',
          placeholderTextColor: Colors.gray,
          onChangeText: handleChange('name'),
          onBlur: handleBlur('name'),
          value: name,
        }}
        yup={{touched:touched?.name,errors:errors?.name}}
       
      />
      <RNInput
        inputProps={{
          placeholder: 'Enter Email',
          placeholderTextColor: Colors.gray,
          onChangeText: handleChange('email'),
          onBlur: handleBlur('email'),
          value: email,
        }}
        yup={{touched:touched?.email,errors:errors?.email}}
       
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
       
        isRight={true}
        isShow={true}
      />

      <View style={{marginVertical: hp(5)}}>
        <RNButton text="Next" btnProps={{
           onPress:()=> navigation.navigate('DocSignScreen')
           // onPress:handleSubmit
        }}/>
      </View>
      </>
          );
        }}
      </Formik>
      </AppWrapper>
  );
};

export default SignupScreen;

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
});
