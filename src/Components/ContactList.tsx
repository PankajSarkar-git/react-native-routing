import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import img from '../imgs/images.jpg';

const ContactList = () => {
  const contactList = [
    {
      uid: 1,
      name: 'John Doe',
      phone: '123-456-7890',
      email: 'john@example.com',
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 2,
      name: 'Jane Smith',
      phone: '987-654-3210',
      email: 'jane@example.com',
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
    {
      uid: 3,
      name: 'Michael Johnson',
      phone: '555-555-5555',
      email: 'michael@example.com',
      img: img,
      imgUri:
        'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.Container} scrollEnabled={false}>
        {contactList.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image source={img} style={styles.userimage} />
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userEmail}>{item.email}</Text>
              <Text style={styles.userPhone}>{item.phone}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  Container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginBottom: 6,
    backgroundColor :'#DAE0E2',
    paddingHorizontal : 8,
    paddingVertical : 6,
    borderRadius : 12,
  },
  userimage: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  userEmail: {
    fontSize:12,
    marginBottom: 1,
  },
  userPhone: {
    fontSize:12,
    marginBottom: 1,
  },
});
