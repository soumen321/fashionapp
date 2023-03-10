import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React, {useRef, useEffect} from 'react';
import {PrimaryColor, SecondaryColor} from '../components/Styles';
import CustomButton from '../components/CustomButton';
import OTPTextInput from 'react-native-otp-textinput';

const OtpScreen = ({navigation}) => {
  const otpInput = useRef(null);
  const setText = () => {
    otpInput.current.setValue('1234');
  };
  useEffect(() => {
    setText();
  });

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
            Verification Code
          </Text>
        </View>
      </LinearGradient>

      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 50, fontSize: 16}}>
          Please enter code sent to +919836187828
        </Text>
        <View style={{marginTop: 30}}>
          <OTPTextInput ref={otpInput} />
        </View>

        <CustomButton
          marginTop={30}
          title="Continue"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          fontSize: 18,
        }}>
        <Text>Resend Code</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OtpScreen;

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
  textInput: {
    marginTop: 30,
    borderWidth: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#d5d5d5',
  },
});
