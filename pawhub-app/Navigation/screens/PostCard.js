import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import base64 from 'base64-js';


function PostCard({ postData }) {
  const { text, images, username, date, pfp } = postData;


  console.log('PostData:', postData);
  console.log('Text:', text);
  console.log('Images:', images);
  console.log('Username:', username);
  console.log('Date:', date);
  console.log('PFP:', pfp);

  const base64ToImageURI = (base64Data) => {
  // Add padding if necessary to make the length a multiple of 4
  while (base64Data.length % 4 !== 0) {
    base64Data += '=';
  }

  const byteArray = base64.toByteArray(base64Data);
  const imageURI = 'data:image/png;base64,' + base64.fromByteArray(byteArray);
  return imageURI;
};

useEffect(() => {
  // Log the constructed image URI for the first post only
  if (images && images.length > 0) {
    console.log('Constructed Image URI (First Post):', base64ToImageURI(images[0]));
  }
}, [images]);

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

    

      <View style={styles.imageContainer}>
        {images && images.length > 0 && (
          <Image source={{ uri: base64ToImageURI(images[0]) }} style={styles.postCardImage} />
        )}
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
