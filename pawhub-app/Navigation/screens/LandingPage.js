import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LandingPage = ({ onLogin, onSignup, navigation }) => {
  const handleLogin = () => {
    // Perform your login logic here
    // If the login is successful, call the onLogin prop to switch to the MainContainer
    onLogin();
  };

  return (
    <View style={styles.container}>
      {/* Your Logo */}
      <Image
        source={require('../images/pawhub-logo-text.png')} // Update with the actual path to your logo image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Your Landing Page content here */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#025464',
  },
  logo: {
    width: 150, // Adjust the width and height as per your logo dimensions
    height: 150,
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#e57c23',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    marginBottom: 20,
  },
  signupButton: {
    backgroundColor: '#e57c23',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LandingPage;
