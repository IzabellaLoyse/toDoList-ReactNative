import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';

export default function Header() {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.containerBox}>
          <Text style={styles.text}>Hey, xuxu 😉</Text>
          <Text style={styles.subtitle}>Qual é a lista do dia ?</Text>
        </View>

        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../assets/images/list-check.png')}
          />
        </View>
      </View>
    </View>
  );     
  }


  
const styles = StyleSheet.create({
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#5e6ed4',
    height: 160,
    width: '100%',
  },

  containerBox: {
    marginTop: 10,
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: 80,
    height: 82,
    borderRadius: 50,
    marginTop: 20,
  },

  image: {
    width: 100,
    height: 88,
  },

  text: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 20,
    paddingBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 10,
    paddingBottom: 10,
  },
});
