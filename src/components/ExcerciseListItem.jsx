import { StyleSheet, Text, View} from 'react-native';

export default function ExerciseListItem({ item }) {
    return (
      <View style={styles.excerciseContainer}>
        <Text style={styles.exerciseName}>{item.name} </Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>{item.muscle}</Text> |{' '} 
          <Text style={styles.subValue}>{item.equipment}</Text>
        </Text>
      </View>
    );
  }


  const styles = StyleSheet.create({
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
  
    exerciseSubtitle: {
      color: "dimgray",
    },
  
    excerciseContainer: {
      backgroundColor: "#fff",
      padding: 10,
      borderRadius: 11,
      gap: 5,
      marginHorizontal: 2,

      //shadow dimensions

      shadowColor: "#000",
      shadowOffset: {
	          width: 0,
	          height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,

      elevation: 2,
      },


    subValue: {
      textTransform: 'uppercase',
    },











  });
  
