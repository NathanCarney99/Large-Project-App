import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

function NewPost() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  const handleAddPost = () => {
    // Perform any necessary actions with the entered text and images
    console.log("New post added:", text);
    console.log("Images:", images);
    setText("");
    setImages([]);
  };

  const handleImageChange = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      allowsMultipleSelection: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImages(result.uris);
    }
  };

  return (
    <View style={styles.screenContainer}>
    <View style={styles.container}>
      <View style={styles.inner}>
        <TextInput
          style={styles.text}
          value={text}
          onChangeText={(value) => setText(value)}
          placeholder='Enter your post...'
          multiline
        />

        <TouchableOpacity
          style={styles.chooseFileButton}
          onPress={handleImageChange}
        >
          <Text style={styles.chooseFileText}>Choose File</Text>
        </TouchableOpacity>

        {images.length > 0 && (
          <View style={styles.imageContainer}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{ uri: image }}
                style={styles.image}
              />
            ))}
          </View>
        )}

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleAddPost}
          >
            <Text style={styles.buttonText}>Add Post</Text>
          </TouchableOpacity>
        </View>


      </View>
      </View>
    </View>
  );
}

const styles = {
    screenContainer: {
        flex: 1,
        justifyContent: 'center', // Center vertically
        backgroundColor: 'white',
        alignItems: 'center',
      },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#e57c23', // Add orange background color here
    paddingHorizontal: 10,
    alignItems: 'center',
    width: 350,
    borderRadius: 60
  },
  inner: {
    flex: 1,
  },
  text: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 60,
    width: 260
  },
  chooseFileButton: {
    backgroundColor: '#025464',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  chooseFileText: {
    color: 'white',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
  },
  buttons: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#025464',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
};

export default NewPost;
