import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Check if any of the input fields are empty
    if (name.trim() === '' || email.trim() === '' || username.trim() === '' || password.trim() === '') {
      // If any field is empty, navigate to MainContainer
      navigation.replace('MainContainer');
    } else {
      // Implement your actual signup logic here
      // For now, we'll just navigate to MainContainer without any validation
      navigation.replace('MainContainer');
    }
  };

  return (
    <View style={styles.container}>
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

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
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
  inputLabel: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: '#000', // Change text color to black
    backgroundColor: 'white', // Set the background color to white
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
});

export default SignupScreen;
