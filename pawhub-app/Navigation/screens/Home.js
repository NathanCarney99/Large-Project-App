import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';

export default function Home({ navigation }) {
  const handleSearchUsers = () => {
    // Handle navigation to the search users screen here
    // For example, you can use the navigation prop to navigate to the SearchUsers component:
    navigation.navigate('SearchBar');
  };

  return (
    <ScrollView>
      <View style={styles.blackContainer}>
        <TouchableOpacity onPress={handleSearchUsers}>

          <View style={styles.searchContainer}>

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
  },
  searchButton: {
    color: '#025464',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
