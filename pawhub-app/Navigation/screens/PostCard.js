import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import base64 from 'base64-js';
import { Buffer } from 'buffer';


function PostCard({ postData }) {
  const { text, images, username, date, pfp } = postData;
  const [imageURI, setImageURI] = useState(null);



  console.log('PostData:', postData);
  console.log('Text:', text);
  console.log('Images:', images);
  console.log('Username:', username);
  console.log('Date:', date);
  console.log('PFP:', pfp);


  useEffect(() => {
    if (images && images.length > 0) {
      base64ToImageURI(images[0])
        .then((uri) => setImageURI(uri))
        .catch((error) => console.error('Error converting base64 to URI:', error));
    }
  }, [images]);

  const base64ToImageURI = async (base64Data) => {
    try {
      const response = await fetch(`${base64Data}`);
      const blob = await response.blob();
      const uri = URL.createObjectURL(blob);
      return uri;
    } catch (error) {
      throw error;
    }
  };


  console.log('Constructed Image URI :', imageURI);



  return (
    <View style={styles.postCardContainer}>
      <View style={styles.postCardInner}>
        <View style={styles.picture}>
          <Image source={{ uri: pfp }} style={styles.profilePic} />
        </View>

        <View style={styles.postcardFields}>
          <Text style={styles.postcardFieldsText}>{`${username} · ${date}`}</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.postCardText}>{text}</Text>
        </View>
      </View>

    

      
    </View>
  );
}

const styles = StyleSheet.create({
    postCardContainer: {
        flexGrow: 1,
        backgroundColor: '#025464',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        marginTop: 30,
        borderRadius: 20,
        overflow: 'hidden',
    },
    postCardInner: {
        width: '100%',
    },
    picture: {
        position: 'absolute',
        top: 0,
        left: 0,
        borderWidth: 3,
        borderColor: '#fff',
        borderRadius: 60,
    },
    profilePic: {
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    postcardFields: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: 10,
    },
    postcardFieldsText: {
        fontSize: 18,
        marginLeft: 80,
        marginTop: 30,
        color: '#fff',
        fontWeight: 'bold'
    },
    postCardText: {
        flex: 1,
        padding: 10,
        color: 'black',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: 10,
        fontSize: 16,
    },
    postCardTextInputContainer: {
        flex: 1,
        borderRadius: 20, // Apply borderRadius to the container view
        overflow: 'hidden', // Hide overflowing content to respect borderRadius
      },
    textContainer: {
        padding: 20,
        paddingTop: 10,
    },
    likeBtn: {
        margin: 10,
    },
    imageContainer: {
        backgroundColor: '#025464',
        display: 'flex',
        flexDirection: 'row', // Align images horizontally
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 899,
    },
    postCardImage: {
        width: 100,
        height: 100,
        margin: 3,
        borderWidth: 3,
        borderColor: 'white',
    },
});

export default PostCard;
