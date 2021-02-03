import React, {FC} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const ExpenseFeed: FC<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>Hello</Text>
            <Button title={'push'} onPress={() => console.log('press')} />
        </View>
    )
}

export default ExpenseFeed
