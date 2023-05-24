
import { useState } from 'react'
import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native'


function GoalsInput({ ctaHandler, visible, onCancel }) {

    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(goal) {
        console.log(goal)
        setEnteredGoalText(goal)
    }

    function addGoalHandler() {
        ctaHandler(enteredGoalText)
        setEnteredGoalText('')
    }
    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image style={styles.image} source={require('../assets/images/goals.png')}/>
                <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your course goal.' onChangeText={goalInputHandler} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Add goal' onPress={addGoalHandler} color='#a065aa'/>
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={onCancel} color='#f31282'/>
                    </View>
                </View>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 8
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    }
})

export default GoalsInput