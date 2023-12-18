import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '@/utils/variables';
import { Fonts, Icons } from '@/assets';

const MiniBtns = () => {
  return (
    <View style={styles.miniBtns}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {[
        '02 / 08 / 2023',
        '2hr',
        'Investors:425',
        'Featherstone, LONDON, Uk',
      ].map((i, index) => {
        return (
          <TouchableOpacity key={index} style={styles.miniBtnStyle}>
            <Icons.eye alignSelf="center" marginRight={wp(2)} />
            <Text style={styles.miniBtnText}>{i}</Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  </View>

  )
}

export default MiniBtns

const styles = StyleSheet.create({
    miniBtns: {
        flexDirection: 'row',
        justifyContent: 'space-between',
       marginHorizontal:wp(5),
        marginVertical: hp(2),
      },
      miniBtnStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.gray1,
        borderColor:Colors.gray1,
        borderWidth: 1,

        paddingHorizontal: wp(3),
        paddingVertical: hp(0.5),
        borderRadius: wp(10),
        marginHorizontal: wp(1),
      },
      miniBtnText: {
        color: 'white',
        fontSize: wp(2.5),
        alignSelf: 'center',
        fontFamily:Fonts.regular
      },
})