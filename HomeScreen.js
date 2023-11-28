import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fire Alarm System Dashboard</Text>

      {/* Sensor Status Display */}
      <Text>Temperature: 24°C</Text>
      <Text>Gas Level: Normal</Text>

      {/* Navigation Buttons */}
      <Button
        title="Set Thresholds"
        onPress={() => navigation.navigate('Thresholds')}
      />
      <Button
        title="View History"
        onPress={() => navigation.navigate('History')}
      />
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

export default HomeScreen;
