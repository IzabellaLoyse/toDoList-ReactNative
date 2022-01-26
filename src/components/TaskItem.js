import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function TaskItem(props) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <Icon name="bookmark" size={20} color="#5e6ed4" />
        </View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    backgroundColor: '#6f98d7',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },

  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },

  square: {
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    opacity: 0.8,
    borderRadius: 5,
    marginRight: 15,
    alignItems: 'center',
    paddingTop: 2,
  },

  itemText: {
    fontSize: 15,
    color: '#fff',
    maxWidth: '80%',
  },
});
