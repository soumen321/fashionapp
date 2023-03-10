import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = props => {
  const {onPress, title, marginTop = 0} = props;
  return (
    <TouchableOpacity
      style={{...styles.btnStyle, marginTop: marginTop}}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyle: {
    marginTop: 10,
    backgroundColor: '#e7b844',
    minWidth: 200,
    height: 50,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
