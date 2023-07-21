import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const AboutPage = () => {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.titleHolder}>
        <Text style={styles.title}>About Us</Text>
      </View>
      <View style={styles.pics}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://bestfriends.org/sites/default/files/2023-02/Victory3427MW_Social.jpg',
            }}
            style={styles.leftPic}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://i.insider.com/5c79a8cfeb3ce837863155f5?width=600&format=jpeg&auto=webp',
            }}
            style={styles.rightPic}
          />
        </View>
      </View>
      <View style={styles.paragraphHolder}>
        <Text style={styles.subtitle}>Welcome to PawHub</Text>
        <Text style={styles.paragraph}>
          PawHub is a pet website where pets can create profiles, login, and sign up for a unique social media platform. It offers a space for pets to connect, share stories, and engage with fellow furry friends. From adorable pictures to daily adventures, PawHub fosters social interaction and strengthens the bond between pets in the digital realm.
        </Text>
      </View>
      <View style={styles.pics}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://hips.hearstapps.com/hmg-prod/images/large-dog-breeds-lead-1550810820.jpg',
            }}
            style={styles.leftPic}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri:
                'https://www.boredpanda.com/blog/wp-content/uuuploads/cute-baby-animals/cute-baby-animals-10.jpg',
            }}
            style={styles.image}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleHolder: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
    backgroundColor: '#025464',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "white"
  },
  pics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
  },
  leftPic: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: "15px"
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: "15px"
  },
  rightPic: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: "15px"
  },
  paragraphHolder: {
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#025464"
  },
  subtitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: "white",
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default AboutPage;
