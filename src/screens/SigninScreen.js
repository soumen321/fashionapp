import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';
import {PrimaryColor, SecondaryColor} from '../components/Styles';
import CustomButton from '../components/CustomButton';

const SigninScreen = ({navigation}) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <LinearGradient
        colors={[PrimaryColor, SecondaryColor]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.headerGradient}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Text style={{color: '#fff', marginHorizontal: 20, fontSize: 25}}>
            What Is Your Phone Number?
          </Text>
        </View>
      </LinearGradient>

      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 50, fontSize: 16}}>
          Please enter your phone number to verify your account
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.prefix}>+91</Text>
          <TextInput
            placeholder="999 999 9999"
            keyboardType="number-pad"
            underlineColorAndroid="transparent"
            onChangeText={mobile_number => this.setState({mobile_number})}
          />
        </View>
        <CustomButton
          marginTop={30}
          title="Send Verification Code"
          onPress={() => navigation.navigate('OtpScreen')}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          fontSize: 18,
        }}>
        <Text>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SigninScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerGradient: {
    height: '25%',
    width: '100%',
    borderBottomEndRadius: 250,
    overflow: 'hidden',
  },
  inputContainer: {
    marginTop: 30,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#d5d5d5',
  },
  prefix: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: 'black',
  },
});
