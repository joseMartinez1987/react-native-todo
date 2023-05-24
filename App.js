import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import GoalsItems from './components/GoalsItems';
import GoalsInput from './components/GoalsInputs';
export default function App() {

  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)



  function startAddGoalHandler() {
    setModalIsVisible(true)
  }
  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, {
      text: enteredGoalText,
      id: Math.floor(Math.random() * 9999999999999999999)
    }])
    endAddGoalHandler()
  }


  function deleteGoalHandler(id) {

    setCourseGoals((currentCourseGoals => {
      return currentCourseGoals.filter(goal => goal.id !== id)
    }))
  }

  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.appContainer}>
        <Button title="Add new Goal" color="#5e0acc" onPress={startAddGoalHandler} />
        {modalIsVisible && <GoalsInput ctaHandler={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />}
        <View style={styles.goalContainer}>
          <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={itemData => {
            return (
              <GoalsItems text={itemData.item.text} id={itemData.item.id} onDeleteItem={deleteGoalHandler} />
            )
          }}
            keyExtractor={(item) => {
              return item.id
            }}
          >
          </FlatList>


          {/* <ScrollView alwaysBounceVertical={false}>
          {
            courseGoals.map((goal,index) => (
              <View style={styles.goalItems} key={index}>
                <Text style={styles.goalText}>{goal}</Text>
              </View>
            ))}
        </ScrollView> */}
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    flex: 1
  },

  goalContainer: {
    flex: 5,
    color: 'red'
  },
});
