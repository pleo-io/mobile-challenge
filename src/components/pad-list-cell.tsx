import React, {FC} from 'react'
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {color} from '../util/colors'
import {Pad} from '../api/types'

interface Props {
    pad: Pad
    onPress: (pad: Pad) => void
}

export const PadListCell: FC<Props> = ({pad, onPress}) => {
    const statusColor =
        pad.status === 'active'
            ? color.green700
            : pad.status === 'under construction'
            ? color.yellow700
            : color.red700

    return (
        <TouchableOpacity
            key={pad.id}
            onPress={() => onPress(pad)}
            style={styles.padOuterContainer}>
            <View style={styles.padInnerContainer}>
                <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                        <Text
                            style={[
                                styles.statusText,
                                {backgroundColor: statusColor}
                            ]}>
                            {pad.status.toUpperCase()}
                        </Text>
                    </View>
                    <View style={[styles.textRow, {paddingTop: 4}]}>
                        <Text style={styles.smallText}>
                            {pad.attempted_launches + ' ATTEMPTED'}
                        </Text>
                        <Text style={styles.dot}>{'•'}</Text>
                        <Text style={styles.smallText}>
                            {pad.successful_launches + ' SUCCEEDED'}
                        </Text>
                    </View>
                    <Text style={styles.padTitle}>{pad.name}</Text>
                    <Text style={styles.vehicles}>
                        {pad.vehicles_launched.join(', ')}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    padOuterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 8,
        shadowColor: Platform.select({ios: color.shade900}),
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2
    },
    padInnerContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden'
    },
    textContainer: {
        flex: 1,
        padding: 12
    },
    statusText: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        fontWeight: '600',
        color: color.shade000,
        borderRadius: 4,
        fontSize: 10,
        overflow: 'hidden'
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallText: {
        textTransform: 'uppercase',
        color: color.shade500,
        fontSize: 12,
        fontWeight: '600'
    },
    dot: {
        color: color.shade500,
        paddingHorizontal: 4
    },
    padTitle: {
        paddingTop: 6,
        fontWeight: '600',
        color: color.shade800,
        fontSize: 16
    },
    vehicles: {
        color: color.shade900,
        fontSize: 14,
        fontWeight: '400',
        paddingTop: 2
    }
})
