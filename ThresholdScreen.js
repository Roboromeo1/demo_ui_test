import React from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';

const ThresholdScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Threshold Levels</Text>

      {/* Input for Thresholds */}
      <TextInput placeholder="Temperature Threshold (°C)" />
      <TextInput placeholder="Gas Level Threshold" />

      <Button title="Save Settings" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ThresholdScreen;
