import {Button, Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {styles} from './style';
import ProductImage from '../../Components/productImage';
import PrimaryButton from '../../Components/button';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({route}: DetailsProps) => {
  const {product} = route.params;
  const {
    name,
    imageUrl,
    originalPrice,
    discountPrice,
    offerPercentage,
    rating,
    ratingCount,
  } = product;
  console.log(product);

  const navigate =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.text}>Details</Text>
        <View style={styles.ImageContainer}>
          <ProductImage width={58} height={40} imageUrl={imageUrl} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.orginalPrice}>
          Original Price : ₹ {originalPrice}
        </Text>
        <Text style={styles.discountPrice}>
          Offer Price : ₹ {discountPrice}
        </Text>
        <Text style={styles.orginalPrice}>Offer : {offerPercentage} %</Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.orginalPrice}>Rating :</Text>
          <Text style={styles.rating}> {rating}</Text>
        </View>
        <Text style={styles.orginalPrice}>Reviews : {ratingCount}</Text>

        <View style={styles.btnContainer}>
          <PrimaryButton bgcolor={'#019031'} text={'Add to cart'} />
          <PrimaryButton bgcolor={'#F4C724'} text={'Buy Now'} />
        </View>
        {/* <Button title="Go to home" onPress={() => navigate.navigate('Home')} /> */}
        <Button title="Go to home" onPress={() => navigate.goBack()} />
        {/* <Button title="Go to First Screen" onPress={() => navigate.pop(1)} /> */}
        {/* <Button
          title="Go to First Screen"
          onPress={() => navigate.popToTop()}
        /> */}
      </View>
    </ScrollView>
  );
};

export default Details;
