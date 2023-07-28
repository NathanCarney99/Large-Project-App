import React, { useState } from 'react';
import axios from 'axios';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const [successMessage, setSuccessMessage] = useState('');


  const addNewUser = async (newUser) => {
    try {
      let response = await axios.post('http://pawhub.space/api/addNewUser', newUser);
      return response.data;
    } catch (error) {
      console.error('Failed to post data', error);
      throw error;
    }
  };



  const searchUsersReturnUsers = async (query) => {
    try {
      const queryString = Object.keys(query)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`)
        .join('&');
  
      const url = `http://pawhub.space/api/searchUsersReturnUsers?${queryString}`;
  
      console.log('API URL:', url); // Debug: Log the API URL being called




      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });


      console.log('API Response:', response); // Debug: Log the API response

  
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

  const addUser = async () => {
    const newUser = {
      "name": name,
      "username": username,
      "email": email,
      "password": password,
      "profilePicture": "https://example.com/profile.jpg",
      "friendList": []
    };
    let query = { "email": email };
    let anyUsers = await searchUsersReturnUsers(query);
    console.log(anyUsers);

    if (anyUsers === undefined) {
      await addNewUser(newUser);
      setSuccessMessage("Welcome to Pawhub!");

      await delay(2000);
      doLogin(email, password, null);
    } else {
      setErrorMessage("An account already exists with that Email Address");
    }
  };


  const doLogin = async (email, password, setErrorValue) => {
    let query = { "email": email, "password": password };
    console.log(query);
  
    let currentUser = await searchUsersReturnUsers(query);
    if (currentUser === undefined) {
      console.log("InvalidLogin");
      setErrorValue("Invalid Email or password");
    } else {
      console.log(currentUser);
  
      // Store the email and password using AsyncStorage
      await AsyncStorage.setItem('email', email);
      await AsyncStorage.setItem('password', password);
  
      // Replace the current screen with 'MainContainer'
      navigation.replace('MainContainer');
    }
  };



  const handleSignup = () => {
    // Check if any of the input fields are empty
    if (name.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
      setErrorMessage('Please fill in all the fields.');
    } else if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      // If all fields are filled correctly, proceed with signup
      addUser();
    }
  };

  const isValidEmail = (email) => {
    // Simple email validation using regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your desired email"
          value={email}
          onChangeText={setEmail}
        />

        {/* Username Input */}
        <Text style={styles.inputLabel}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your desired username"
          value={username}
          onChangeText={setUsername}
        />

        {/* Password Input */}
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your desired password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Display error message if there's any */}
        {errorMessage !== '' && <Text style={styles.errorMessage}>{errorMessage}</Text>}

        {/* Signup Button */}
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
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
  signupButton: {
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
  errorMessage: {
    color: 'red',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default SignupScreen;
