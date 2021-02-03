import React, {FC} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {Navigation} from 'react-native-navigation'
import {Screen} from './index'
import font from './style/font'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: font.fontHeadingBase,
    }
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
            <Text style={styles.title}>Expense feed</Text>
            <Button title={'Show detail view'} onPress={showDetail} />
        </View>
    )
}

export default ExpenseFeed
