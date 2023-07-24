import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (text) => {
    const term = text.trim().toLowerCase();
    setSearchTerm(term);

    if (term.length === 0) {
      setSearchResults([]);
      return; // No search term entered, exit
    }

    // Simulated user data (replace with your own data source)
    const users = [
      { name: 'John Doe', following: false },
      { name: 'Jane Smith', following: false },
      { name: 'Alex Johnson', following: false },
      { name: 'Sarah Adams', following: false },
      { name: 'David Lee', following: false },
      { name: 'Emily Taylor', following: false },
      { name: 'Michael Brown', following: false }
      // ...
    ];

    const results = users
      .filter((user) => user.name.toLowerCase().includes(term))
      .slice(0, 10); // Limit results to 10

    setSearchResults(results);
  };

  const handleFollowToggle = (index) => {
    const updatedResults = [...searchResults];
    updatedResults[index].following = !updatedResults[index].following;
    setSearchResults(updatedResults);
  };

  const handleClearSearchTerm = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const renderItem = ({ item, index }) => (
    <View key={index} style={styles.searchResult}>
      <Text>{item.name}</Text>
      <TouchableOpacity
        style={[styles.followButton, item.following ? styles.followingButton : null]}
        onPress={() => handleFollowToggle(index)}
      >
        <Text style={styles.followButtonText}>{item.following ? 'Following' : 'Follow'}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.searchBar}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for users..."
              value={searchTerm}
              onChangeText={handleInputChange}
            />
            {searchTerm ? (
              <TouchableOpacity style={styles.clearButton} onPress={handleClearSearchTerm}>
                <Ionicons name="close" size={24} color="#025464" />
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
      </TouchableWithoutFeedback>
      {searchTerm && (
        <FlatList
          data={searchResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={styles.searchResultsContainer} // Apply the custom width style here
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 60,
    padding: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 10,
    borderRadius: 15,
    fontSize: 18,
    color: 'black',
  },
  clearButton: {
    padding: 5,
    marginRight: 10,
  },
  searchResultsContainer: {
    paddingHorizontal: 20, // Set the horizontal padding to control the width
    
  },
  searchResult: {
    marginBottom: 5,
    marginTop: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 15,
    fontSize: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  followButton: {
    backgroundColor: '#e57c23',
    padding: 5,
    borderRadius: 15,
  },
  followButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  followingButton: {
    backgroundColor: '#025464',
  },
});

export default SearchBar;
