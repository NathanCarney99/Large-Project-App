import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from the expo/vector-icons package

// Screens
import Home from './screens/Home';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import About from "./screens/About";

// Screen Names
const homeName = 'Home';
const contactName = 'Contact';
const profileName = 'Profile';
const aboutName = 'About'; // New screen name

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#025464" />
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === profileName) {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === contactName) {
              iconName = focused ? 'mail' : 'mail-outline';
            } else if (route.name === aboutName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            }

            return (
              <Ionicons
                name={iconName}
                color={focused ? '#e57c23' : "white"}
                size={size}
              />
            );
          },
          tabBarStyle: { backgroundColor: '#025464' },
          tabBarLabelStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff',
            marginTop: 4, // Optional: Adjust the vertical positioning of the text
          },
          headerStyle: { backgroundColor: '#025464' },
          headerTitleStyle: { color: '#fff' },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={profileName} component={Profile} />
        <Tab.Screen name={contactName} component={Contact} />
        <Tab.Screen name={aboutName} component={About} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}
