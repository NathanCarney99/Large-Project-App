import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from @expo/vector-icons

// Screens
import Home from './screens/Home';
import Contact from './screens/Contact';
import Profile from './screens/Profile';
import About from './screens/About';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';

// Screen Names
const homeName = 'Home';
const contactName = 'Contact';
const profileName = 'Profile';
const aboutName = 'About'; // New screen name

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainContainer = () => {
  // State to handle the user's authentication status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle successful login (you can call this when the user logs in)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle successful logout (you can call this when the user logs out)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#025464" />
      <Stack.Navigator>
        {/* Stack.Screen for LandingPage */}
        <Stack.Screen name="LandingPage" options={{ headerShown: false }}>
          {(props) => <LandingPage {...props} onLogin={handleLogin} navigation={props.navigation} />}
        </Stack.Screen>
        
        {/* Stack.Screen for LoginScreen */}
        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: true }} />
        {/* Stack.Screen for SignupScreen */}
        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: true }} />

     

        {/* Stack.Screen for the bottom tab navigator */}
        <Stack.Screen name="MainContainer" options={{ headerShown: false }}>
          {() => (
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
                      color={focused ? '#e57c23' : 'white'}
                      size={size}
                      style={{ paddingTop: 8 }}
                    />
                  );
                },
                tabBarStyle: { backgroundColor: '#025464' },
                tabBarLabelStyle: {
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: '#fff',
                  paddingTop: 0,
                  marginTop: 3,
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
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
