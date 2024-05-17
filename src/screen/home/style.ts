import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
//   responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    // height: responsiveHeight(100),
    width: responsiveWidth(100),
  },
  text: {
    fontSize: responsiveFontSize(6),
    color: '#000000',
  },
  productContainer: {
    paddingHorizontal:responsiveWidth(2),
  },
});
