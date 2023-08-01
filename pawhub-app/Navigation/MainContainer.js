import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Home from './screens/Home';
import Contact from './screens/Contact';
import ProfileCard from './screens/Profile'; // Update the path to your actual ProfileCard component file
import About from './screens/About';
import LandingPage from './screens/LandingPage';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SearchBar from './screens/SearchBar';

const homeName = 'Home';
const contactName = 'Contact';
const profileName = 'Profile';
const aboutName = 'About';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainContainer = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // Store the current user data here

  
  useEffect(() => {
    // Fetch the user's data from AsyncStorage when the component mounts
    const fetchUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('userData');
        const currentUser = JSON.parse(jsonValue);
        setUserData(currentUser);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchUserData();
  }, []);



  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user); // Store the current user data when logging in
  
    // Save the user data to AsyncStorage
    AsyncStorage.setItem('userData', JSON.stringify(user))
      .then(() => console.log('User data saved to AsyncStorage'))
      .catch((error) => console.error('Error saving user data:', error));
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null); // Clear the current user data when logging out
  
    // Remove the user data from AsyncStorage
    AsyncStorage.removeItem('userData')
      .then(() => console.log('User data removed from AsyncStorage'))
      .catch((error) => console.error('Error removing user data:', error));
  };
  

  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#025464" />
      <Stack.Navigator>
        <Stack.Screen name="LandingPage" options={{ headerShown: false }}>
          {(props) => <LandingPage {...props} onLogin={handleLogin} navigation={props.navigation} />}
        </Stack.Screen>

        <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerTitle: null, headerShown: true, title: '', headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, backgroundColor: '#025464' }, headerTintColor: 'white' }} />

        <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerTitle: null, headerShown: true, title: '', headerStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, backgroundColor: '#025464' }, headerTintColor: 'white' }} />

        <Stack.Screen name="MainContainer" options={{ headerShown: false, headerStyle: { backgroundColor: '#025464' }, headerTintColor: 'white' }}>
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
                    <Ionicons name={iconName} color={focused ? '#e57c23' : 'white'} size={size} style={{ paddingTop: 8 }} />
                  );
                },
                tabBarStyle: { elevation: 0, shadowOpacity: 0, borderBottomWidth: 0, backgroundColor: '#025464' },
                tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', color: '#fff', paddingTop: 0, marginTop: 3 },
              })}
            >
             <Tab.Screen
                name={homeName}
                component={props => <Home {...props} user={currentUser} />}
                options={{
                  headerShown: true,
                  headerStyle: { backgroundColor: '#025464', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
                  headerTintColor: 'white',
                }}
              />

<Tab.Screen
  name={profileName}
  options={{
    headerShown: true,
    headerStyle: { backgroundColor: '#025464', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
    headerTintColor: 'white',
  }}
>
  {(props) => (
    <ProfileCard {...props} route={props.route} navigation={props.navigation} user={currentUser} />
  )}
</Tab.Screen>

              <Tab.Screen
                name="SearchBar"
                component={SearchBar}
                options={{
                  tabBarLabel: 'Search',
                  tabBarIcon: ({ focused, color, size }) => (
                    <Ionicons
                      name={focused ? 'search' : 'search-outline'}
                      color={focused ? '#e57c23' : 'white'}
                      size={size}
                      style={{ paddingTop: 8 }}
                    />
                  ),
                  headerShown: true,
                  headerStyle: { backgroundColor: '#025464', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
                  headerTintColor: 'white',
                }}
              />

              <Tab.Screen
                name={contactName}
                component={Contact}
                options={{
                  headerShown: true,
                  headerStyle: { backgroundColor: '#025464', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
                  headerTintColor: 'white',
                }}
              />

              <Tab.Screen
                name={aboutName}
                component={About}
                options={{
                  headerShown: true,
                  headerStyle: { backgroundColor: '#025464', elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
                  headerTintColor: 'white',
                }}
              />
            </Tab.Navigator>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;
