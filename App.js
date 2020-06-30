import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  Button, 
  ScrollView, 
  FlatList, 
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goalCourses, setGoalCourses] = useState([]);
  const goalEnteredHandler = text => {
    setEnteredGoal(text);
  }
  const addGoalHandler = () => {
    setGoalCourses(currentGoals => [...currentGoals, enteredGoal]);
    console.log("run");
    setEnteredGoal('');
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Course Goal" 
          style={styles.input}
          onChangeText={goalEnteredHandler}
          value={enteredGoal}
        />
        <Button 
          title="ADD"
          onPress={addGoalHandler}
        />
      </View>
      <ScrollView>
        {goalCourses.map((goal) => 
        <View key={goal} style={styles.listItem}>
          <Text>
            {goal}
          </Text>
        </View>)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
  },
  input: {
    width: '80%', 
    borderColor: 'black',  
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
