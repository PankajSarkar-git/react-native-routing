import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(webSiteLink: string) {
    Linking.openURL(webSiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.EelevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            whats is new in javaScript 2021 ES-12
          </Text>
        </View>
        <Image source={require('../imgs/jj.png')} style={styles.CardImage} />
        <View style={styles.CardBody}>
          <Text style={styles.bodyText} numberOfLines={3}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            similique cum aperiam consequuntur? Autem sapiente odit, architecto
            recusandae consequuntur, numquam illo dolorem totam, delectus illum
            commodi quisquam minima accusantium fugiat? Lorem ipsum dolor sit
            amet.
          </Text>
        </View>
        <View style={styles.footerBody}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.syncfusion.com/blogs/post/top-6-javascript-es12-features-you-should-use',
              )
            }>
            <Text style={styles.readMore}>Read More</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://www.linkedin.com/in/pankaj-sarkar-developer/',
              )
            }>
            <Text style={styles.follow}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  EelevatedCard: {
    backgroundColor: '#67E6DC',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#7B8788',
  },
  card: {
    width: 320,
    height: 360,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
  headingContainer: {},
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 12,
    fontWeight: '600',
    color: '#000000',
  },
  CardImage: {
    height: 180,
    width: '100%',
    marginBottom: 8,
  },
  CardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },
  bodyText: {
    color: '#535C68',
    fontSize: 12,
    marginBottom: 16,
    marginTop: 6,
  },
  footerBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  readMore: {
    fontSize: 16,
    color: '#2C3335',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
  },
  follow: {
    fontSize: 16,
    color: '#2C3335',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 6,
  },
});
