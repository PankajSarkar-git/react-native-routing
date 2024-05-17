import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(80),
    paddingHorizontal: responsiveWidth(2),
    paddingVertical: responsiveHeight(3.2),
    marginVertical: responsiveHeight(1),
    borderRadius: 20,
    elevation: 3,
  },
  text: {
    fontSize: responsiveFontSize(2.3),
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
});
