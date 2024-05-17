import {Image} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const ProductImage = (props: any) => {
  return (
    <Image
      source={{uri: props.imageUrl}}
      style={{
        height: responsiveHeight(props.height),
        width: responsiveWidth(props.width),
      }}
    />
  );
};

export default ProductImage;
