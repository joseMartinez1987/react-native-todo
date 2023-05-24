import { StyleSheet, Text, View, Pressable } from 'react-native'

function GoalsItems({ text, id, onDeleteItem }) {
    return (
        <View style={styles.goalItems} >
            <Pressable android_ripple={{ color: '#5e0adc' }} onPress={onDeleteItem.bind(this, id)} style={({pressed}) => pressed && styles.pressdItem } >
                <Text style={styles.goalText}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    goalItems: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        
    },
    goalText: {
        color: 'white',
        fontSize: 16,
        padding: 8,
    },
    pressdItem: {
        opacity: 0.5
    }
})


export default GoalsItems