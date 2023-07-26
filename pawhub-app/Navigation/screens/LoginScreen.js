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


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorValue, setErrorValue] = useState('');


  const searchUsersReturnUsers = async (query) => {
    try {
      const queryString = Object.keys(query)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
  
      const url = `http://localhost:3001/api/searchUsersReturnUsers?${queryString}`;
  
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to search data');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Failed to search data', error);
      return null;
    }
  };
  

  const handleLogin = async () => {
    try {
      let query = { email, password };
      console.log(query);
  
      let currentUser = await searchUsersReturnUsers(query);
      console.log('API Response:', currentUser);


      if (!response.ok) {
        const responseBody = await response.text();
        console.error('API Error:', response.status, responseBody);
        throw new Error('Failed to search data');
      }
  
      if (currentUser === null) {
        console.log('InvalidLogin');
        setErrorValue('Invalid Email or password');
      } else {
        console.log('Login success:', currentUser);
        // Use React Navigation to navigate to the 'MainContainer' screen
        navigation.replace('MainContainer');
      }
    } catch (error) {
      // Handle any network or other errors
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
