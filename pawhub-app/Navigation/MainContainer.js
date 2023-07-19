import { View, Text, StatusBar } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Screens
import Home from './screens/Home';
import Contact from './screens/Contact';
import Profile from './screens/Profile';

// Screen Names
const homeName = 'Home';
const contactName = 'Contact';
const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={{
          tabBarIcon: ({ focused, color, size }) => {
            // Your icon configuration here
          },
          tabBarStyle: { backgroundColor: '#025464' },
          tabBarLabelStyle: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
          headerStyle: { backgroundColor: '#025464' },
          headerTitleStyle: { color: '#fff' },
        }}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={profileName} component={Profile} />
        <Tab.Screen name={contactName} component={Contact} />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
