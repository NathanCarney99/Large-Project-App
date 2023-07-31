import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import NewPost from './NewPost';
import PostCard from './PostCard';

export default function Home() {

  return (
    <ScrollView>
      

      <View>
        <NewPost />
        <PostCard />
      </View>
    </ScrollView>
  );
}


