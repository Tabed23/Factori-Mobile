import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spinner from 'react-native-loading-spinner-overlay';
import { Colors } from '@/utils/variables';


interface Props{
    text:string;
    visible:boolean;
}

const AppLoader = ({
    text="Loading...",
    visible
}:Props) => {
  return (
    <View style={styles.container}>
    <Spinner
      visible={visible}
      textContent={text}
      textStyle={styles.spinnerTextStyle}
    
    />
  </View>
  )
}

export default AppLoader

const styles = StyleSheet.create({
    spinnerTextStyle: {
        color: Colors.white
      },
      container: {
        position:'absolute'
        
      },
     
})