import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveWidth(2),
    height: responsiveHeight(23),
    width : responsiveWidth(94),
    marginVertical: responsiveHeight(2),
    flexDirection: 'row',
    gap: responsiveWidth(2),
    elevation : 3,
    alignItems: 'center',
  },
  textContainer: {
    paddingVertical: responsiveHeight(1.3),
  },
  name: {
    fontSize: responsiveFontSize(1.8),
    fontWeight: '700',
    color: '#000000',
  },
  orginalPrice: {
    fontSize: responsiveFontSize(1.6),
    marginVertical: responsiveHeight(0.4),
  },
  discountPrice: {
    fontSize: responsiveFontSize(1.6),
    color: '#2C3335',
    marginBottom: responsiveHeight(0.6),
  },
  ratingContainer: {
    flexDirection: 'row',
  },
  rating: {
    fontSize: responsiveFontSize(1.6),
    backgroundColor: 'green',
    color: '#fff',
    paddingHorizontal : 6,
    paddingVertical : 2,
    borderRadius: 10,
    marginTop: responsiveHeight(0.6),
  },
});
