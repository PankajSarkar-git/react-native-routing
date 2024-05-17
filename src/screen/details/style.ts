import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(100),
    paddingHorizontal: responsiveWidth(2),
  },
  text: {
    fontSize: responsiveFontSize(6),
    color: '#000000',
  },
  ImageContainer: {
    width: responsiveWidth(100),
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: responsiveHeight(3),
  },
  name: {
    fontSize: responsiveFontSize(3),
    color: '#000000',
    fontWeight: '700',
  },
  orginalPrice: {
    fontSize: responsiveFontSize(2.6),
    marginVertical: responsiveHeight(0.4),
  },
  discountPrice: {
    fontSize: responsiveFontSize(3),
    color: '#2C3335',
    marginBottom: responsiveHeight(0.6),
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: responsiveFontSize(2),
    backgroundColor: 'green',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: responsiveHeight(0.6),
    marginLeft: 6,
  },
  btnContainer: {
    alignItems: 'center',
    // marginBottom : responsiveHeight(30),
    paddingVertical: responsiveHeight(3),
  },
});
