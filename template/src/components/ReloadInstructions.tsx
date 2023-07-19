import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export const ReloadInstructions = Platform.select({
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd + R</Text> in the simulator to
      reload your app's code.
    </Text>
  ),
  default: () => (
    <Text>
      Double tap <Text style={styles.highlight}>R</Text> on your keyboard to
      reload your app's code.
    </Text>
  ),
});
