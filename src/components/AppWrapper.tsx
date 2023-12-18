import {StyleSheet, SafeAreaView, StatusBar, Platform, ScrollView, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {Colors, hp} from '@/utils/variables';
import AppLoader from './AppLoader';
import { useSelector } from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

interface Props {
  children: any;
}

const AppWrapper = ({children}: Props) => {
  const {isLoading} = useSelector(state=>state.loading)
  return (
   
        <KeyboardAwareScrollView
      style={{backgroundColor:Colors.bgColor}}
      
        contentContainerStyle={{flexGrow:1}}
     
        bounces={false}
        showsVerticalScrollIndicator={false}
        enableOnAndroid={false}
        scrollEnabled={true}
        keyboardShouldPersistTaps="handled"
        scrollToOverflowEnabled={true}
        enableAutomaticScroll={true}>
        {children}
        </KeyboardAwareScrollView>
    
    
  );
};

export default AppWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
});

