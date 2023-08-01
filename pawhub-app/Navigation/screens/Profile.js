import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker'; // Import Expo ImagePicker
import axios from 'axios'; // Import axios library for API calls

const ProfileCard = ({ navigation, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const usernameInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const handleSubmit = () => {
    // Handle form submission here
  };

  const handleOutsidePress = () => {
    // Blur the input fields when clicking outside of them
    Keyboard.dismiss();
  };

 // Function to fetch user data from the API
 const getUserInfo = async () => {
  try {
    // Make an API call to fetch user data based on the email
    const response = await axios.get('https://pawhub.space/api/searchUsersReturnUsers', {
      params: {
        email: 'user@example.com', // Replace with the user's email (if you have a logged-in user, get it from the authentication context or storage)
      },
    });

    // Extract the user data from the response and update the state
    const userVals = response.data;
    if (userVals && userVals.length > 0) {
      setEmail(userVals[0].email);
      setPassword(userVals[0].password);
      setName(userVals[0].name);
      setUserName(userVals[0].username);

      const data = userVals[0].profilePicture;
      if (data !== undefined) {
        setProfilePicture(data);
      }
    }
  } catch (error) {
    console.error('Failed to fetch user data', error);
  }
};

useEffect(() => {
  // Fetch user data when the component mounts
  getUserInfo();
}, []);


  const handleLogout = () => {
    // Clear any session data or cookies here
    // For now, let's just reset the state and navigate back to the LandingPage
    setEmail("");
    setPassword("");
    setName("");
    setUserName("");
    setProfilePicture(null);
    navigation.navigate('LandingPage');
  };


  const handleProfilePicturePress = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync(); // Request gallery permission

    if (permissionResult.granted === false) {
      alert('Permission to access the gallery is required!');
      return;
    }

    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // mediaType is deprecated, use mediaTypes instead
      allowsEditing: true, // Allow the user to crop the image
      aspect: [1, 1], // The aspect ratio of the cropped image (square in this case)
      quality: 1, // Image quality
    };

    const result = await ImagePicker.launchImageLibraryAsync(options);

    if (!result.cancelled) {
      setProfilePicture(result.uri);
    }
  };

  return (
    
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <KeyboardAvoidingView
        style={styles.profileContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
          <View style={styles.profileInner}>
            <TouchableOpacity onPress={handleProfilePicturePress}>
              <View style={styles.profilePictureContainer}>
                {profilePicture ? (
                  <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
                ) : (
                  <Image source={require('../images/defaultPic.jpg')} style={styles.profilePicture} />
                )}
              </View>
            </TouchableOpacity>

            <Text style={styles.label}>Name</Text>
            <TextInput
              ref={nameInputRef}
              style={[styles.input, styles.tallerInput]}
              placeholder="Full Name"
              value={name}
              onChangeText={(text) => setName(text)}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
              ref={emailInputRef}
              style={[styles.input, styles.tallerInput]}
              placeholder="youremail@gmail.com"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.label}>Username</Text>
            <TextInput
              ref={usernameInputRef}
              style={[styles.input, styles.tallerInput]}
              placeholder="LiL_PuG"
              value={username}
              onChangeText={(text) => setUserName(text)}
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
              ref={passwordInputRef}
              style={[styles.input, styles.tallerInput]}
              placeholder="********"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#025464', // Set the background color to blue
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 0,
    backgroundColor: '#025464', // Set inner padding to 0
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#025464',
  },
  profileInner: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '80%',
    backgroundColor: '#025464',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  label: {
    fontSize: 24,
    marginBottom: 5,
    color: 'white'
  },
  input: {
    borderWidth: 1,
    borderColor: '#025464',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
    backgroundColor: 'white'
  },
  tallerInput: {
    height: 50,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#025464',
    fontSize: 24,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#e57c23',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default ProfileCard;
