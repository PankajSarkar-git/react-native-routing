import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './style';

const PrimaryButton = (props: any) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: props.bgcolor}]}>
      <Text style={styles.text}>Button {props.text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;
