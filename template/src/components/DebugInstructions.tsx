import React from 'react';
import {Platform, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

export const DebugInstructions = Platform.select({
  ios: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd + D</Text> in the simulator or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
  default: () => (
    <Text>
      Press <Text style={styles.highlight}>Cmd or Ctrl + M</Text> or{' '}
      <Text style={styles.highlight}>Shake</Text> your device to open the React
      Native debug menu.
    </Text>
  ),
});
