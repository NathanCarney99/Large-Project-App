import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import PostPicture from "../images/Meow.jpg";
import LikeButton from './LikeButton';
import Example1 from "../images/Meow.jpg"
import Example2 from "../images/Meow.jpg"
import Example3 from "../images/Pug.jpg"

function PostCard() {
    const [editing, setEditing] = useState(false);
    const [text, setText] = useState("With My best Friend Shaggy! 🐶  🐶#bff");
    const [images, setImages] = useState([
        Example1,
        Example2,
        Example3
    ]);


    return (
        <ScrollView contentContainerStyle={styles.postCardContainer}>
          <View style={styles.postCardInner}>
            <View style={styles.picture}>
              <Image source={PostPicture} style={styles.profilePic} />
            </View>
    
            <View style={styles.postcardFields}>
              <Text style={styles.postcardFieldsText}>LiL_PuG · 10/10/2023 *EXAMPLE*</Text>
            </View>
    
            <View style={styles.textContainer}>
              {editing ? (
                <View style={styles.postCardTextInputContainer}>
                  <TextInput
                    style={styles.postCardText}
                    value={text}
                    onChangeText={(value) => setText(value)}
                    multiline
                    editable={false} // Set this to false to make it non-editable
                  />
                </View>
              ) : (
                <View style={styles.postCardTextContainer}>
                  <Text style={styles.postCardText}>{text}</Text>
                </View>
              )}
    
              <View style={styles.likeBtn}>
                <LikeButton />
              </View>
            </View>
    
            <View style={styles.imageContainer}>
              {images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={styles.postCardImage}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      );
    }

const styles = StyleSheet.create({
    postCardContainer: {
        flexGrow: 1,
        backgroundColor: '#025464',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 10,
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
    },
    postCardText: {
        flex: 1,
        padding: 10,
        color: 'black',
        wordWrap: 'wrap',
        backgroundColor: '#fff',
        borderRadius: 20,
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
