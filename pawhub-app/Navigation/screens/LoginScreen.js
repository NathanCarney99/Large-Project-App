import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import axios from 'axios';



const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorValue, setErrorValue] = useState('');


  const handleLogin = async () => {
    try {
      const response = await axios.get('https://pawhub.space/api/searchUsersReturnUsers', {
        params: {
          email: email,
          password: password,
        },
      });
  
      const currentUser = response.data;
  
      if (currentUser === null || currentUser === undefined || Object.keys(currentUser).length === 0) {
        setErrorValue('Invalid Email or password');
      } else {
        // Save the user's data in AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(currentUser));
  
        // Use React Navigation to navigate to the 'MainContainer' screen
        navigation.navigate('MainContainer', { user: currentUser });
      }
    } catch (error) {
      setErrorValue('Error occurred during login');
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        {/* Username Input */}
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
      style={styles.input}
      placeholder="Enter your email"
      value={email}
      onChangeText={setEmail}
    />

        {/* Password Input */}
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />


        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{errorValue}</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#025464',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },

  errorText: {
    color: 'white', // Set the color to white
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10, // Add some margin to separate it from the login button
  },
  inputLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000',
    backgroundColor: 'white',
  },
  loginButton: {
    backgroundColor: '#e57c23',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
