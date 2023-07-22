import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard, Image } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const ProfileCard = () => {
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

  const handleProfilePicturePress = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
    };

    ImagePickerlaunchImageLibrary(options, (response) => {
      if (response.uri) {
        setProfilePicture(response.uri);
      }
    });
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.profileContainer}>
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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInner: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '80%',
  },
  profilePictureContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  label: {
    fontSize: 24,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#025464',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 18,
  },
  tallerInput: {
    height: 50,
  },
  button: {
    backgroundColor: '#025464',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
  },
});

export default ProfileCard;
