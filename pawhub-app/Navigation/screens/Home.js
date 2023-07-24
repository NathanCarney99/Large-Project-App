import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import NewPost from './NewPost';
import PostCard from './PostCard';

export default function Home({ navigation }) {
  const handleSearchUsers = () => {
    // Handle navigation to the search users screen here
    // For example, you can use the navigation prop to navigate to the SearchBar component:
    navigation.navigate('SearchBar');
  };

  return (
    <ScrollView>
      

      <View>
        <NewPost />
        <PostCard />
      </View>
    </ScrollView>
  );
}


