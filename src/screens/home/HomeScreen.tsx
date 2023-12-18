import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {MovieCard, RNButton, RNHeader, Slider} from '@/components';
import {Fonts, Icons} from '@/assets';
import {ScrollView} from 'react-native-gesture-handler';

interface Props {
  navigation: any;
}

const HomeScreen = ({navigation}: Props) => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.bgColor}}>
      <RNHeader
        check="home"
        child={[
          <Icons.f alignSelf="center" />,
          <Icons.search alignSelf="center" />,
        ]}
        style={[styles.headerBtns, styles.headerBtns]}
      />

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: hp(30), marginTop: hp(2)}}>
          <Slider navigation={navigation} />
        </View>

        <View style={styles.groupBtn}>
          {['Horror', 'Action', 'Teen'].map((i, index) => {
            return (
              <View key={index}>
                <RNButton
                  text={i}
                  customStyle={styles.btnStyle}
                  textStyle={{fontSize: FontSize.tiny}}
                />
              </View>
            );
          })}
        </View>
        <Text style={styles.textStyle}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Reed more
        </Text>

        <MovieCard title="Newest Additions" navigation={navigation} />
        <MovieCard title="Most Interest" navigation={navigation} />
        <View style={{marginBottom: hp(15)}} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerBtns: {
    backgroundColor: 'transparent',
    width: wp(15),
    borderWidth: 0,
    marginHorizontal: wp(2),
  },
  groupBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginVertical: hp(2),
    height: hp(4),
    alignItems: 'center',
  },

  btnStyle: {
    backgroundColor: Colors.red1,
    width: wp(28),
    height: '100%',
    marginHorizontal: wp(0),
    borderColor: Colors.gray1,
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.light,
    fontSize: FontSize.tiny,
    marginHorizontal: wp(5),
    textAlign: 'center',
  },
});
