import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';


const Counter = () => {

    const [count, setCount] = React.useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.counterText}>Counter: {count}</Text>

            <View style={styles.subcontainer}>
                <Button title='Increase' onPress={() => setCount(count + 1)}/>
                <Button title='Decrease' onPress={() => setCount(count - 1)}/>
                <Button title='Reset' onPress={() => setCount(0)}/>
            </View>
            
        </View>
     )
}

export default Counter

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    counterText: {
        fontSize: 32,
        marginBottom: 20,
    },
    subcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    }
})