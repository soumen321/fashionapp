/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: '65%',
        }}>
        <Image
          source={require('./assets/spalashimage.png')}
          resizeMethod="resize"
          style={{
            backgroundColor: '#f3eef5',
            width: '100%',
            height: '100%',
            opacity: 0.75,
            paddingRight: 10,
          }}
        />
        <View style={styles.yellowsticker}></View>
      </View>

      <LinearGradient
        colors={['#3d2f48', '#805c9c']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.linearGradient}>
        <View style={styles.footerContainer}>
          <View style={styles.textContainer}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 28,
                color: '#e7b844',
              }}>
              Fashion
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 28,
                color: '#fff',
              }}>
              ary
            </Text>
          </View>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              alignItems: 'center',
              justifyContent: 'center',
              marginHorizontal: 24,
              marginVertical: 10,
            }}>
            Each day is a page in your fashion story - Make people fall in love
            with your clothes.
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
              backgroundColor: '#e7b844',
              width: 200,
              height: 50,
              borderRadius: 6,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
              }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f3eef5',
  },
  linearGradient: {
    borderRadius: 5,
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  yellowsticker: {
    height: 70,
    width: 200,
    borderTopLeftRadius: 70,
    backgroundColor: '#e7b844',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: -20,
    opacity: 0.5,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  footerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
  },
  textContainer: {
    marginTop: 20,
    flexDirection: 'row',
  },
});

export default App;
