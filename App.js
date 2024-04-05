import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import excercises from './assets/data/exercises.json';

export default function App() {
  const excercise = excercises[0];

  return (
    <View style={styles.container}>

      <View style={styles.excerciseContainer}>
      <Text style={styles.exerciseName}>{excercise.name} </Text>
      <Text style={styles.exerciseSubtitle}>
        {excercise.muscle.toUpperCase()} | {excercise.equipment.toUpperCase()}
        </Text>

      </View>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  
  exerciseName: {
    fontSize: 20,
    fontWeight: '500',


  },

  exerciseSubtitle: {
    color: 'dimgray',

  },


  excerciseContainer: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 11,
    gap: 5,




  }


});
