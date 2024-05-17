import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
//   Button,
  StyleSheet,
  //   ImageBackground,
  Image,
} from 'react-native';

const LogInPage = (): JSX.Element => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <ImageBackground source={require('./ff.webp')} resizeMethod="auto" resizeMode="cover" /> */}
        <Image style={styles.Logo} source={require('./gym.jpg')} />
        <View style={styles.textContainer}>
          <Text style={styles.welcome}>Welcome to gympro</Text>
          <Text style={styles.text}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex maxime
            repudiandae quas iure! Consequatur aperiam aut harum quo? Natus,
            inventore.
          </Text>
        </View>
        <Text style={styles.button} > Get Started</Text>
        <View style={styles.signContainer}>
        <Text style={styles.haveAccount}>Already have an account? </Text>
        <Text style={styles.signn}>Sign in </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'flex-end',
    height: 650,
  },
  Logo: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: 650,
    justifyContent: 'center',
  },
  button: {
    padding: 15,
    borderRadius: 50,
    backgroundColor: 'yellow',
    textAlign : 'center',
    margin: 20,
    fontSize : 18,
  },
  text: {
    color: 'white',
    textAlign: 'left',
  },
  welcome: {
    textAlign: 'left',
    fontSize: 32,
    color: 'white',
    paddingBottom: 10,
    textTransform: 'capitalize',
  },
  textContainer: {
    margin: 20,
    marginTop : 10,
  },
  signContainer :{
    padding : 10,
    paddingBottom : 30,
  },
  signn : {
    fontSize : 20,
    color : 'yellow',
    textAlign : 'center',
    textTransform : 'capitalize'
  },
  haveAccount : {
    textAlign : 'center',
    color :'white',
    paddingBottom: 10,

  },
});

export default LogInPage;
