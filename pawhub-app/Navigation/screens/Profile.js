import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({navigation}) {
  return (
    <View>
      <Text
          onPress={() => navigation.navigate('Home')}>Profile</Text>
    </View>
  )
}