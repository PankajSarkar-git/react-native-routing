import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevetedCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevetedCard</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.text}>one</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.text}>tow</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.text}>three</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.text}>four</Text>
        </View>
        <View style={[styles.card, styles.cardEleveted]}>
          <Text style={styles.text}>five</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevetedCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 8,
  },
  cardEleveted: {
    backgroundColor: '#0562f7',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor : '#de5f0b',
    shadowOpacity : 0.6,
    shadowRadius : 2,
  },
  container: {
    padding: 8,
  },
  text: {
    color: '#ada8a8',
  },
});
