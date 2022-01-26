import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import TaskItem from './TaskItem';

export default function Tasks() {
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  
  const handleAddTask = () => {
    setTaskItem([...taskItem, task]);
    setTask(null);
  };

  const completeTask = index => {
    let itemsCopy = [...taskItem];
    itemsCopy.splice(index, 1);
    setTaskItem(itemsCopy);
  };

  return (
    <View>
      <Text style={styles.Text}>Add Tarefa</Text>
      <View style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={'Escreva uma tarefa'}
          placeholderTextColor="#fff"
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Icon name="plus" size={20} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tarefas 🪄 </Text>
        <View style={styles.containerItems}>
          {taskItem.map((item, index) => {
            return (
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <TaskItem text={item} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tasksWrapper: {
    paddingTop: 10,
    paddingHorizontal: 40,
  },

  Text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e6ed4',
    marginBottom: 8,
    marginLeft: 38,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5e6ed4',
    marginBottom: 8,
  },

  containerItems: {
    marginTop: 15,
  },
  writeTaskWrapper: {
    marginVertical: 20,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 60,
    backgroundColor: '#6f98d7',
    borderColor: '#fff',
    borderWidth: 1,
    width: 250,
    color: '#fff',
  },

  addWrapper: {
    padding: 15,
    borderRadius: 60,
    backgroundColor: '#a0e7dd',
    borderColor: '#fff',
    borderWidth: 1,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
