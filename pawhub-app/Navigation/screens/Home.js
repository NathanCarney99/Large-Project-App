import { View, Text, ScrollView } from 'react-native'
import React from 'react';
import NewPost from './NewPost';
import PostCard from './PostCard';

export default function Home({navigation}) {
  return (
    <ScrollView>
      <View>
        <NewPost />
        <PostCard />
      </View>
    </ScrollView>
  );
}
