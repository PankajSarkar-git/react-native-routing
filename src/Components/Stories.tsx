import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import img from '../imgs/images.jpg';

const Stories = () => {
  const storyList = [
    {
      uid: 1,
      name: 'John Doe',
      story: true,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      story: true,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 3,
      name: 'Michael',
      story: false,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 4,
      name: 'Michael',
      story: true,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 5,
      name: 'Michael',
      story: true,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 6,
      name: 'Michael',
      story: false,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 7,
      name: 'Michael',
      story: true,
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Stories</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {storyList.map(item => (
          <View style={styles.story} key={item.uid}>
            <Image
              source={item.img}
              style={item.story ? [styles.img, styles.activeStory] : styles.img}
            />
            <Text style={styles.name}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    width: '100%',
    height: 120,
  },
  story: {
    marginRight: 10,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
  },
  activeStory: {
    borderColor: 'gray',
    borderWidth: 1,
  },
  name: {
    textAlign: 'center',
    color: '#000000',
    fontSize: 12,
    fontWeight: '600',
    marginTop: 2,
  },
});
