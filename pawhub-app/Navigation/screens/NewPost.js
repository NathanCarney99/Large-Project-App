import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation



function NewPost() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  const navigation = useNavigation();
  



  
  const handleAddPost = () => {
    // Perform any necessary actions with the entered text and images
    console.log("New post added:", text);
    console.log("Images:", images);
    setText("");
    setImages([]);
    onPostAdded(); // Call the onPostAdded function passed as a prop to trigger refresh
  };
const handleImageChange = async () => {
  const result = await getImageFromGallery(false); // Pass true for allowsMultipleSelection
  if (!result.cancelled) {
    setImages(result.uris);
  }
};

  const getImageFromGallery = async (allowsMultipleSelection) => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access media library is required!");
      return { cancelled: true };
    }

    const options = {
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection,
      quality: 1,
    };

    return ImagePicker.launchImageLibraryAsync(options);
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

          <View style={styles.alignButtons}>
            <TouchableOpacity
              style={styles.chooseFileButton}
              onPress={() => handleImageChange()}
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
  alignButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: 10,
    backgroundColor: '#025464',
    paddingHorizontal: 10,
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 40,
  borderBottomRightRadius: 40,
  },
 
  text: {
    height: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 280,
  },
  chooseFileButton: {
    backgroundColor: '#e57c23',
    padding: 10,
    borderRadius: 70, // Make it a circle by setting borderRadius to half of width (140/2)
    width: 140,
    alignItems: 'center', // Center text inside the circle
    justifyContent: 'center',
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
    width: 140,
  },
  button: {
    backgroundColor: '#e57c23',
    padding: 10,
    borderRadius: 70, // Make it a circle by setting borderRadius to half of width (140/2)
    marginHorizontal: 5,
    width: 140,
    alignItems: 'center', // Center text inside the circle
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
};

export default NewPost;
