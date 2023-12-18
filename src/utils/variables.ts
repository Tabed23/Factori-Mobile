/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
  



/**
 * FontSize
 */
 const FontSize = {
 
  tiny: wp(3.5),
  small: wp(4),
  regular: wp(4.5),
  medium: wp(5.5),
  large: wp(6),
  xlarge: wp(7),
  
};

export {hp, wp,FontSize};


