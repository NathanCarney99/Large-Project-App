import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <View style={styles.likeButtonContainer}>
      <TouchableOpacity style={styles.likeButton} onPress={handleLikeClick}>
        <FontAwesome5
          name={liked ? 'thumbs-up' : 'thumbs-up'}
          solid={liked} // Set solid to true when liked
          style={[styles.likeIcon, liked && { color: '#e57c23' }]} // Change color to orange when liked
        />
        <Text style={styles.likeButtonText}>{liked ? 'Liked' : 'Like'}</Text>
      </TouchableOpacity>
      <Text style={styles.likesCount}>{likes} {likes === 1 ? 'Like' : 'Likes'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  likeButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 0,
    padding: 0,
    marginRight: 10,
  },
  likeIcon: {
    fontSize: 20,
    color: '#fff',
    marginRight: 5,
  },
  likeButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  likesCount: {
    color: '#fff',
  },
});

export default LikeButton;
