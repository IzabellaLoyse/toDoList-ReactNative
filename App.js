
import React from 'react';
import { View, StyleSheet} from 'react-native';
import Header from './src/components/Header';
import Tasks from './src/components/Tasks';


export default function App() {
  return (
  <View style={styles.container}>
    <Header />
    <Tasks/>
  </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


