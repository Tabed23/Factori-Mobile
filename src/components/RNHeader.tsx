import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, wp} from '@/utils/variables';
import RNButton from './RNButton';



interface Props {
  btnProps: []; // Change the type to an array of ButtonProps
  text: [string, string];
  child: [any,any];
  style: [];
  check: string | 'auth';
}
const RNHeader = ({
  btnProps,
  text,
  style,
  check,
  child
}: Props) => {
 
  return (
    <View
      style={styles.container}>
      <RNButton
        text={text&& text[0]}
        textStyle={{color: Colors.white}}
        btnProps={btnProps&& btnProps[0]}
        check={check}
        icon={child&&child[0]}
        customStyle={style&& style[0]}
      />
      <RNButton
        text={text&& text[1]}
        textStyle={{color: Colors.red}}
        btnProps={btnProps&& btnProps[1]}
        check={check}
        icon={child&&child[1]}
        customStyle={ style&& style[1]}
      />
    </View>
  );
};

export default RNHeader;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  }
});
