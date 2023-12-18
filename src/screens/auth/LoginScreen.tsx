import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {AppWrapper, RNButton, RNHeader, RNInput} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts, Icons} from '@/assets';
import {useLoginUserMutation} from '@/services/modules/user';
import {Formik} from 'formik';
import {LoginInterface} from '@/utils/formik/interfaces';
import {LoginValidation} from '@/utils/formik/validation';
import {useDispatch, useSelector} from 'react-redux';
import {setIsLoading} from '@/store/loading';
import Toast from 'react-native-simple-toast';
import {setRemember} from '@/store/auth';

interface Props {
  navigation: any;
}

interface value {
  email: string;
  password: string;
}

const LoginScreen = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const {user, isRemember} = useSelector(state => state?.auth);
  const [loginUser, {isLoading, isError, error, isSuccess}] =
    useLoginUserMutation();

  useEffect(() => {
    dispatch(setIsLoading(isLoading));
  }, [isLoading]);

  // login user
  const handleLogin = async (value: value, resetForm: any) => {
    let obj = {
      email: value?.email,
      password: value?.password,
    };
    await loginUser(obj);
    // resetForm()
  };

  useEffect(() => {
    if (isSuccess) {
      navigation.replace('Tabs');
      Toast.showWithGravity(
        'User successfully login.',
        Toast.LONG,
        Toast.BOTTOM,
      );
    }
    if (isError) {
      Toast.showWithGravity(error?.data?.message, Toast.LONG, Toast.BOTTOM);
    }
  }, [isSuccess, isError]);

  return (
    <AppWrapper>
      <Icons.logo alignSelf="center" marginTop={hp(8)} marginBottom={hp(8)} />
      <Formik
        initialValues={LoginInterface(isRemember ? user?.email : '')}
        validationSchema={LoginValidation}
        onSubmit={(v, {resetForm}) => {
          //handleLogin(v, resetForm);
          navigation.replace('Tabs');
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          touched,
          errors,
        }) => {
          const {email, password} = values;
          return (
            <>
              <RNInput
                inputProps={{
                  placeholder: 'Email or phone number',
                  placeholderTextColor: Colors.gray,
                  onChangeText: handleChange('email'),
                  onBlur: handleBlur('email'),
                  value: email,
                }}
                yup={{touched: touched?.email, errors: errors?.email}}
              />
              <RNInput
                inputProps={{
                  placeholder: 'Password',
                  placeholderTextColor: Colors.gray,
                  secureTextEntry: true,
                  onChangeText: handleChange('password'),
                  onBlur: handleBlur('password'),
                  value: password,
                }}
                isShow={true}
                yup={{touched: touched?.password, errors: errors?.password}}
                isRight={true}

                //  isShow={false}
              />

              <View style={styles.miniContainer}>
                <View style={styles.flexRow}>
                  <RNButton
                    check="checkBox"
                    icon={isRemember ? <Icons.tick alignSelf="center" /> : null}
                    customStyle={[
                      styles.checkBox,
                      {
                        backgroundColor: isRemember
                          ? Colors.red
                          : 'transparent',
                      },
                    ]}
                    btnProps={{
                      onPress: () => dispatch(setRemember(!isRemember)),
                    }}
                  />
                  <Text style={styles.remember}>Remember me</Text>
                </View>
                {/* <RNButton
                  text="Forgot Password?"
                  textStyle={{color: Colors.red}}
                  customStyle={styles.forgot}
                /> */}
              </View>

              <View style={{marginBottom: hp(3)}}>
                <RNButton
                  text="Login"
                  btnProps={{
                    onPress: handleSubmit,
                    // onPress:()=> navigation.replace('Tabs')
                  }}
                />
              </View>
            </>
          );
        }}
      </Formik>

      <Text style={styles.create}>
        Don’t have an account ?{' '}
        <Text
          style={styles.account}
          onPress={() => navigation.navigate('SignupScreen')}>
          Create Account
        </Text>
      </Text>
      <Text
        style={[
          styles.create,
          {color: Colors.gray, fontSize: FontSize.tiny, textAlign: 'center'},
        ]}>
        Sign-in is protected by Google reCAPTCHA to ensure you’re not a bot.
      </Text>
    </AppWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.bgColor},
  miniContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginBottom: hp(2),
  },
  flexRow: {flexDirection: 'row', alignItems: 'center'},
  checkBox: {
    height: wp(5),
    width: wp(5),
    borderRadius: wp(1),
    marginHorizontal: wp(0),
    marginRight: wp(5),
  },
  remember: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: FontSize.small,
  },
  forgot: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    marginHorizontal: wp(0),
  },
  create: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: FontSize.small,
    marginBottom: hp(1),
    marginHorizontal: wp(5),
  },
  account: {
    color: Colors.red,
    fontFamily: Fonts.bold,
  },
});
