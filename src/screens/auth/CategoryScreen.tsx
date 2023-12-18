import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AppWrapper, RNButton} from '@/components';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {Fonts, Icons} from '@/assets';

interface Props {
  navigation: any;
}

const CategoryScreen = ({navigation}: Props) => {
 

const [data,setData] = useState([
  {
    name: 'Horror',
    isSelect: false,
  },
  {
    name: 'Action',
    isSelect: false,
  },
  {
    name: 'Thriller',
    isSelect: false,
  },
  {
    name: 'Comedy',
    isSelect: false,
  },
  {
    name: 'Adventure',
    isSelect: false,
  },
  {
    name: 'Narrative',
    isSelect: false,
  },
  {
    name: 'Musical',
    isSelect: false,
  },
  {
    name: 'Drama',
    isSelect: false,
  },
  {
    name: 'Noir',
    isSelect: false,
  },
  {
    name: 'War',
    isSelect: false,
  },
  {
    name: 'Romantic',
    isSelect: false,
  },
  {
    name: 'Short',
    isSelect: false,
  },
  {
    name: 'Fiction',
    isSelect: false,
  },
  {
    name: 'Historical',
    isSelect: false,
  },
]
)

const onPress=(index:number)=>{
  let temp = [...data];
  temp[index].isSelect=!temp[index].isSelect;
  setData(temp)
}

const renderItem = (item: any, index: number) => {
    return (
      <View key={index}>
        <RNButton
          text={item.name}
          customStyle={[styles.miniBtnStyle,{
            backgroundColor:item?.isSelect?Colors.red: Colors.red1,
            borderColor: item?.isSelect?Colors.red:Colors.borderColor,
          }]}
          textStyle={{fontSize:FontSize.tiny}}
          btnProps={{
            onPress:()=>onPress(index)
          }}
        />
      </View>
    );
  };

  return (
    <AppWrapper>
      <Icons.logo alignSelf="center" marginTop={hp(8)} marginBottom={hp(8)} />

      <Text style={[styles.create, {fontSize: FontSize.large}]}>
        Your <Text style={styles.account}>Preference</Text>
      </Text>

      <View style={{marginHorizontal: wp(5),height:hp(35),marginBottom:hp(5)}}>
        <FlatList
          data={data}
          keyExtractor={(item, index) => `key+${index}`}
          renderItem={({item, index}) => renderItem(item, index)}
          numColumns={3}
        />
      </View>

      
        <RNButton text="Next" btnProps={{
            onPress:()=>navigation.navigate('LoginScreen')
        }}/>
      
    </AppWrapper>
  );
};

export default CategoryScreen;

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
  miniBtnStyle:{
    width: wp(28),
    height:hp(5),
    marginBottom: hp(2),
    marginHorizontal: wp(1),
   
  }
});
