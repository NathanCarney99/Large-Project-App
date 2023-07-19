import { View, Text } from 'react-native'
import React from 'react'

export default function Contact({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>Contact</Text>
    </View>
  )
}