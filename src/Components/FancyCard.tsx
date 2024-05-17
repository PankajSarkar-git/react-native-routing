import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardEleveted]}>
        <Image
          source={require('../imgs/manali1.jpg')}
          style={[styles.cardImage]}
        />
        <View style={styles.cardBody}>
          <Text style={styles.CardTitle}>Manali</Text>
          <Text style={styles.CardLabel}>Manali</Text>
          <Text style={styles.CardDescription}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
            unde? Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, laudantium.
          </Text>
          <Text style={styles.cardFootar}>
            15 minutes above
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    width: 320,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
  },
  cardEleveted: {
    backgroundColor: '#8395A7',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#7B8788',
  },
  cardImage: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    marginBottom: 8,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  CardTitle: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 2,
    marginBottom: 4,
  },
  CardLabel: {
    color: '#000000',
    fontSize: 14,
    marginBottom : 6,
  },
  CardDescription: {
    color: '#535C68',
    fontSize: 12,
    marginBottom: 16,
    marginTop : 6,
    flexShrink :1,

  },
  cardFootar: {
    color: '#000000',
  },
});
