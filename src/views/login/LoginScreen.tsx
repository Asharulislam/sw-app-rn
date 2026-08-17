import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.description}>The login form will appear here.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  title: {
    color: '#222222',
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    color: '#777777',
    fontSize: 15,
    marginTop: 8,
  },
});
