import React, {FC} from 'react'
import {
    ActivityIndicator,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle
} from 'react-native'

export const EmptyState: FC<{
    loading?: boolean
    text?: string
    style?: StyleProp<ViewStyle>
}> = ({loading, text, style}) => {
    return (
        <View style={[styles.container, style]}>
            {loading ? <ActivityIndicator /> : null}
            {text ? <Text>{text}</Text> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
