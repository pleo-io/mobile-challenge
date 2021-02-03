import React, {FC} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {Screen} from './index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const ExpenseFeed: FC<{componentId: string}> = ({componentId}) => {
    const showDetail = () => {
        Navigation.push(componentId, {
            component: {
                name: Screen.ExpenseDetail,
            },
        })
    }

    return (
        <View style={styles.container}>
            <Text>Expense feed</Text>
            <Button title={'Show detail view'} onPress={showDetail} />
        </View>
    )
}

export default ExpenseFeed
