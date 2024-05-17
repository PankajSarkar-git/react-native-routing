import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import img from '../imgs/images.jpg';

const ChatComponent = () => {
  const chatList = [
    {
      uid: 1,
      time: '12:10 mp',
      name: 'John Doe',
      chat: true,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 2,
      time: '12:10 mp',
      name: 'Jane Smith',
      chat: true,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 3,
      time: '12:10 mp',
      name: 'Michael',
      chat: false,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 4,
      time: '12:10 mp',
      name: 'Michael',
      chat: true,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 5,
      time: '12:10 mp',
      name: 'Michael',
      chat: true,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 6,
      time: '12:10 mp',
      name: 'Michael',
      chat: false,
      img: img,
      sms: 'hyyy how are you?',
    },
    {
      uid: 7,
      time: '12:10 mp',
      name: 'Michael',
      chat: true,
      img: img,
      sms: 'hyyy how are you?',
    },
  ];
  return (
    <View style={styles.container}>
      {chatList.map(item => (
        <View style={styles.chatBox}>
          <View style={styles.leftBox}>
            <Image source={item.img} style={styles.img} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.sms}>{item.sms}</Text>
            </View>
          </View>
          <View style={styles.rightBox}>
            <Text style={styles.time}>{item.time}</Text>
            <Text style={[styles.mark]}>1</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default ChatComponent;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal : 10,
    marginBottom :20,
  },
  chatBox: {
    height : 100,
    width : '100%',
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'center',
    paddingTop : 25,
    paddingBottom : 2,
    borderBottomColor : 'gray',
    borderBottomWidth : 0.3,
  },
  leftBox: {
    flex : 1,
    flexDirection : 'row',
    alignItems : 'center',
    gap : 2,
  },
  img: {
    height : 70,
    width : 70,
    borderRadius : 70 / 2,
  },
  name: {
    fontSize : 18,
    fontWeight : '600',
    color : '#000000',
    textTransform : 'capitalize',
    marginBottom : 3,
  },
  sms: {
    fontSize : 14,
    fontWeight : '300',
  },
  rightBox: {
    marginRight : 4,
    width : 50,
  },
  time: {
    fontSize : 10,
    fontWeight : '300',
  },
  mark: {
    textAlign : 'center',
    fontSize : 13,
    paddingHorizontal : 2,
    paddingVertical : 2,
    borderRadius : 100,
    backgroundColor: 'blue',
    color: '#ffffff',
    width: 23,
    marginLeft : 20,
    marginTop : 5,
  },
});
