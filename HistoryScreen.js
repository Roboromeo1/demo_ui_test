import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const HistoryScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>History of Readings</Text>

      {/* Display historical data here */}
      <View style={styles.dataContainer}>
        <Text style={styles.dataText}>Temperature at 10:00 - 23°C</Text>
        <Text style={styles.dataText}>Gas level at 10:00 - Normal</Text>
        {/* More data... */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  dataContainer: {
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default HistoryScreen;
