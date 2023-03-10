import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../components/CustomButton';
import {PrimaryColor, SecondaryColor} from '../components/Styles';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#9b8cbd" barStyle="light-content" />
      <View
        style={{
          width: '100%',
          height: '65%',
        }}>
        <Image
          source={require('../assets/spalashimage3.png')}
          resizeMethod="resize"
          style={{
            backgroundColor: '#9b8cbd',
            width: '100%',
            height: '100%',
            opacity: 0.6,
            paddingRight: 10,
          }}
        />
        <View style={styles.yellowsticker}></View>
      </View>

      <LinearGradient
        colors={[PrimaryColor, SecondaryColor]}
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
          <CustomButton
            title="Get Started"
            onPress={() => navigation.navigate('SigninScreen')}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#9b8cbd',
  },
  linearGradient: {
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
    opacity: 0.75,
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

export default Splash;
