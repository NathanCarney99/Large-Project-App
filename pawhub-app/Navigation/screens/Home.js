import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons
import NewPost from './NewPost';
import PostList from './PostList';

export default function Home({ user }) {
  const [refreshKey, setRefreshKey] = useState(0); // State variable to trigger refresh

  const handlePostAdded = () => {
    setRefreshKey((prevKey) => prevKey + 1); // Update refreshKey to trigger refresh
  };

  return (
    <ScrollView>
      <View>
        <NewPost onPostAdded={handlePostAdded} />
        <PostList refreshKey={refreshKey} />
      </View>
    </ScrollView>
  );
}
