import React, {FC} from 'react'
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {color} from '../util/colors'

const styles = StyleSheet.create({
    infoTitleContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginBottom: 4
    },
    infoIcon: {
        marginRight: 4
    },
    infoIconText: {
        fontSize: 12,
        fontWeight: '500',
        color: color.shade800
    },
    infoTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: color.shade800
    },
    infoSubtitle: {
        fontSize: 12,
        fontWeight: '300',
        color: color.shade700
    }
})

export const InfoRow: FC<{
    iconName: string
    iconText: string
    title: string
    subtitle: string
    style?: StyleProp<ViewStyle>
}> = ({iconName, iconText, title, subtitle, style}) => {
    return (
        <View style={style}>
            <View style={styles.infoTitleContainer}>
                <Icon size={12} name={iconName} style={styles.infoIcon} />
                <Text style={styles.infoIconText}>{iconText}</Text>
            </View>
            <Text style={styles.infoTitle}>{title}</Text>
            <Text style={styles.infoSubtitle}>{subtitle}</Text>
        </View>
    )
}
