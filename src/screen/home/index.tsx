import {Pressable, ScrollView, StatusBar, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../App';
import {styles} from './style';
import ProductItem from '../../Components/Product';
import {PRODUCTS_LIST} from '../../constant/constant';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;


const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.productContainer}>
        {PRODUCTS_LIST.map(item => (
          <Pressable
            key ={item.id}
            onPress={() => {
              navigation.navigate('Details', {
                product: item,
              });
            }}>
            <ProductItem
              name={item.name}
              imageUrl={item.imageUrl}
              discountPrice={item.discountPrice}
              originalPrice={item.originalPrice}
              rating={item.rating}
              offerPercentage={item.offerPercentage}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default Home;
