import React, {FC} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

const ExpenseDetail: FC<{}> = () => {
    return (
        <View style={styles.container}>
            <Text>Expense detail view</Text>
        </View>
    )
}

export default ExpenseDetail
