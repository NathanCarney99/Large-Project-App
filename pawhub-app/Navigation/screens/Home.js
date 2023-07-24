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
      <View style={styles.blackContainer}>
        <TouchableOpacity onPress={handleSearchUsers}>
          <View style={styles.searchContainer}>
            {/* Add the Ionicons component to display the search icon */}
            <Ionicons name="search" size={24} color="#025464" style={styles.searchIcon} />
            <Text style={styles.searchButton}>Search Users</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <NewPost />
        <PostCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  blackContainer: {
    backgroundColor: '#025464',
  },
  searchContainer: {
    padding: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    margin: 10,
    flexDirection: 'row', // Add flexDirection: 'row' to align icon and text horizontally
  },
  searchIcon: {
    marginRight: 5, // Adjust the margin between the icon and text
  },
  searchButton: {
    color: '#025464',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
