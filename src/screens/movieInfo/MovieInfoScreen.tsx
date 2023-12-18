import {
  Dimensions,
  StyleSheet,
  Text,
  Linking,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors, FontSize, hp, wp} from '@/utils/variables';
import {
  CrewCard,
  MiniBtns,
  MovieCard,
  RNButton,
  RNHeader,
} from '@/components';
import {Fonts, Icons} from '@/assets';
import {ScrollView} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { countConvert } from '@/utils/globalFun';

interface Props {
  route: any;
  navigation: any;
}

const MovieInfoScreen = ({route, navigation}: Props) => {
  const {props} = route?.params;


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
        <View style={styles.bannerView}>
          <View style={styles.bannerInnerView}>
            <FastImage
              source={props.url}
              style={styles.bannerImage}
              resizeMode="cover">
              <LinearGradient
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 1)']}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  borderRadius: wp(8),
                  height: hp(2), // Adjust the height of the gradient overlay
                }}
              />
            </FastImage>
          </View>

          <View style={styles.companyView}>
            <View>
              <Text style={styles.companyName}>Company Name</Text>
              <Text style={styles.companyType}>Loream Ipsum</Text>
            </View>
            <View style={styles.companyBtns}>
              <RNButton
                text="Invest"
                customStyle={styles.companyInvestBtn}
                textStyle={{fontSize: FontSize.tiny}}
              />
              <RNButton
                check="home"
                icon={<Icons.heart alignSelf="center" />}
                customStyle={styles.companyHeart}
              />
            </View>
          </View>

          <MiniBtns />
          <View
            style={{
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            {props?.budget?.map((i: any, index: number) => {
              return (
                <TouchableOpacity style={styles.customStyle}>
                  <Text style={{color:Colors.white,fontFamily:Fonts.bold,fontSize:FontSize.regular,width:wp(14),textAlign:'center'}}>{countConvert(i.amount)}</Text>
                  <Text style={{fontFamily:Fonts.light,fontSize:FontSize.tiny,color:Colors.white,width:wp(20)}}>{i.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
          {/* <Chart /> */}
          <CrewCard />
          <Text
            style={[
              styles.companyName,
              {
                fontSize: FontSize.regular,
                marginHorizontal: wp(5),
                marginVertical: hp(2),
              },
            ]}>
            Description
          </Text>
          <Text
            style={[
              styles.companyType,
              {marginHorizontal: wp(5), lineHeight: hp(3), marginBottom: hp(4)},
            ]}>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum,
          </Text>

          <RNButton
            text="Request info"
            customStyle={{
              height: hp(4),
              marginBottom: hp(3),
              borderColor: Colors.red,
            }}
           
            textStyle={{fontFamily: Fonts.medium, fontSize: FontSize.tiny}}
          />
        </View>

        <MovieCard title="Most Interest" container={{marginBottom: hp(15)}} navigation={navigation}/>
      </ScrollView> 
    </View>
  );
};

export default MovieInfoScreen;

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

    height: hp(7),
    alignItems: 'center',
  },

  btnStyle: {
    backgroundColor: Colors.red1,
    width: wp(28),
    marginHorizontal: wp(0),
  },
  textStyle: {
    alignSelf: 'center',
    color: Colors.white,
    fontFamily: Fonts.light,
    fontSize: FontSize.tiny,
    marginHorizontal: wp(5),
    textAlign: 'center',
  },
  bannerView: {
    backgroundColor: Colors.red1,
    borderColor: Colors.borderColor,
    borderWidth: 1,
    borderRadius: wp(8),
    marginHorizontal: wp(5),
  },
  bannerInnerView: {width: '100%', height: hp(20)},
  bannerImage: {
    width: '99%',
    height: '100%',
    alignSelf: 'center',
    borderRadius: wp(8),
  },
  bannerBottomText: {
    color: 'red',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
  },
  companyView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(1.5),
    marginHorizontal: wp(5),
  },
  companyName: {
    color: Colors.red,
    fontFamily: Fonts.medium,
    fontSize: FontSize.small,
  },
  companyType: {
    color: Colors.white,
    fontFamily: Fonts.light,
    fontSize: FontSize.tiny,
  },
  companyBtns: {flexDirection: 'row', alignItems: 'center'},
  companyInvestBtn: {width: wp(20), height: hp(3), marginHorizontal: wp(2)},
  companyHeart: {
    width: wp(7),
    height: hp(3),
    marginHorizontal: wp(0),
    borderWidth: 1,
    backgroundColor: Colors.red1,
    borderColor: Colors.red,
  },
  customStyle: {
    width: wp(40),
    margin: wp(1),
    height: hp(10),
    borderRadius: wp(4),
    marginHorizontal: wp(1),
    alignItems:'center',
    justifyContent:"space-evenly",
    flexDirection:'row',
    backgroundColor: Colors.gray1,
    borderColor: Colors.red1,
  },
});
