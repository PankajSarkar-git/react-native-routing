import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardtow]}>
          <Text>green</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardthree]}>
          <Text>blue</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    margin: 10,
    // overflow : 'scroll',
  },
  card: {
    flex: 1,
    width: 100,
    height: 100,
    borderRadius: 6,
    // margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardOne: {
    backgroundColor: '#EF5354',
  },
  cardtow: {
    backgroundColor: '#50DBB4',
  },
  cardthree: {
    backgroundColor: '#5da3fa',
  },
});
