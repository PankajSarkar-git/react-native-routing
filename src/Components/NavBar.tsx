import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const NavBar = () => {
  return (
    <View style={styles.navBarContainer}>
      <Text style={styles.navName}>Me Chat</Text>
      <View style={styles.navMenuContainer}>
        <TouchableOpacity>
          <Text style={[styles.menuText, styles.menuTextActive]}>All Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Group</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.menuText}>Calls</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBarContainer: {
    backgroundColor: '#487EB0',
    paddingTop: 25,
    paddingHorizontal: 10,
    width: '100%',
    height: 120,
  },
  navName: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '500',
  },
  navMenuContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },
  menuText: {
    paddingBottom: 15,
    paddingHorizontal: 2,
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
  },
  menuTextActive: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 6,
  },
});
