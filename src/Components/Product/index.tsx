import {Text, View} from 'react-native';
import React from 'react';
import ProductImage from '../productImage';
import {styles} from './style';

const ProductItem = (props: any) => {
  return (
    <View style={styles.container}>
      <ProductImage width={28} height={19} imageUrl={props.imageUrl} />
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.orginalPrice}>Original Price: ₹ {props.originalPrice}</Text>
          <Text style={styles.discountPrice}>Discount Price: ₹ {props.discountPrice}</Text>
          <Text style={styles.discountPrice}>Offer Percentage: {props.offerPercentage}%</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}>{props.rating}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
