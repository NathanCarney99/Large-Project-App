import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const Contact = () => {
    // Handler function for opening LinkedIn links
  const handleLinkedInLink = (url) => {
    Linking.openURL(url);
  };

  const handleWebsiteGitHubLink = () => {
    Linking.openURL('https://github.com/ParkerCMcLeod/Large-Project');
  };

  const handleAppGitHubLink = () => {
    Linking.openURL('https://github.com/rundex0/Large-Project-App');
  };

  // Developer data
  const developers = [
    {
      name: 'Jesus',
      role: 'Front End',
      linkedin: 'https://www.linkedin.com/in/jesus-carballosaa-925729283/',
      image: require('../images/Jesus.jpg'),
    },
    {
      name: 'Brandon',
      role: 'Project Manager',
      linkedin: 'https://www.linkedin.com/in/brandon-holtzman-22155b1b7/',
      image: require('../images/Brandon.jpeg'),
    },
    {
      name: 'Stephen',
      role: 'Database',
      linkedin: 'https://app.podiumx.com/u/846522fa-6e36-4f73-892b-d40fce8fcf0d',
      image: require('../images/Stephen.png'),
    },
    {
      name: 'Nathan',
      role: 'Front End',
      linkedin: 'https://www.linkedin.com/in/nathan-carney-0633b2220/',
      image: require('../images/Nathan.jpg'),
    },
    {
      name: 'Parker',
      role: 'API',
      linkedin: 'https://www.linkedin.com/in/parker-mcleod',
      image: require('../images/Parker.jpg'),
    }
  ];

  return (
    <View style={styles.container}>
    <View style={styles.titleHolderGithub}>
        {/* Website GitHub */}
        <TouchableOpacity onPress={handleWebsiteGitHubLink}>
          <Text style={styles.titleGithub}>Website GitHub</Text>
        </TouchableOpacity>
        {/* App GitHub */}
        <TouchableOpacity onPress={handleAppGitHubLink}>
          <Text style={styles.titleGithub}>App GitHub</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleHolder}>
        <Text style={styles.title}>Meet Our Devs</Text>
      </View>

      {/* Developer Info */}
      <ScrollView style={styles.developerContainer}>
        {developers.map((developer, index) => (
          <View key={index} style={styles.developerBox}>
            <Image source={developer.image} style={styles.pfp} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{developer.name}</Text>
              <Text style={styles.role}>{developer.role}</Text>
              {/* Conditional rendering based on the developer's name */}
              {developer.name === 'Stephen' ? (
                <TouchableOpacity onPress={() => handleLinkedInLink(developer.linkedin)}>
                  <Text style={styles.linkedin}>PodiumX</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => handleLinkedInLink(developer.linkedin)}>
                  <Text style={styles.linkedin}>LinkedIn</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleHolderGithub: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#e57c23',
    marginBottom: 10
  },
  titleHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#025464',
    marginBottom: 10
  },
  titleGithub: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white",
    margin: 10
    },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white"
    },
  developerContainer: {
    paddingHorizontal: 20,
  },
  developerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 10,
  },
  pfp: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
  },
  linkedin: {
    fontSize: 16,
    color: 'blue',
  },
});

export default Contact;
