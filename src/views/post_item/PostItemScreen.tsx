import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PostItemScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Post an Item</Text>
      <Text style={styles.description}>The item form will appear here.</Text>
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
