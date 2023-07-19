import { View, Text } from 'react-native'
import React from 'react'

export default function About({navigation}) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Home')}>About</Text>
    </View>
  )
}
