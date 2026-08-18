import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../core/theme/colors';

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
    backgroundColor: colors.screenBackground,
    padding: 20,
  },
  title: {
    color: colors.text,
    fontSize: 28,
    fontWeight: '700',
  },
  description: {
    color: colors.secondaryText,
    fontSize: 15,
    marginTop: 8,
  },
});
