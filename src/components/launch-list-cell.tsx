import React, {FC} from 'react'
import {
    Image,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import {color} from '../util/colors'
import {formatDate} from '../util/format-date'
import {Launch} from '../api/types'
import {format as timeAgo} from 'timeago.js'

export const LaunchListCell: FC<{
    launch: Launch
    onPress: (launch: Launch) => void
}> = ({launch, onPress}) => {
    const imageUrl =
        launch.links.flickr_images[0] ?? launch.links.mission_patch_small

    const backgroundColor = launch.launch_success
        ? color.green700
        : color.red700

    return (
        <TouchableOpacity
            key={launch.flight_number}
            onPress={() => onPress(launch)}
            style={styles.launchOuterContainer}>
            <View style={styles.launchInnerContainer}>
                <Image source={{uri: imageUrl}} style={styles.launchImage} />
                <View style={styles.textContainer}>
                    <View style={styles.textRow}>
                        <Text style={[styles.successText, {backgroundColor}]}>
                            {launch.launch_success ? 'SUCCESS' : 'FAILURE'}
                        </Text>
                        <Text style={[styles.smallText, {paddingLeft: 8}]}>
                            {launch.rocket.rocket_name}
                        </Text>
                        <Text style={styles.dot}>{'•'}</Text>
                        <Text style={styles.smallText}>
                            {launch.launch_site.site_name}
                        </Text>
                    </View>
                    <Text style={styles.launchTitle}>
                        {launch.mission_name}
                    </Text>
                    <View style={[styles.textRow, {paddingTop: 4}]}>
                        <Text style={styles.date}>
                            {formatDate(launch.launch_date_utc)}
                        </Text>
                        <Text style={styles.time}>
                            {timeAgo(launch.launch_date_utc)}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    launchOuterContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        marginHorizontal: 20,
        borderRadius: 16,
        shadowColor: Platform.select({ios: color.shade900}),
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 4
    },
    launchInnerContainer: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 16,
        overflow: 'hidden'
    },
    launchImage: {
        height: 220,
        resizeMode: 'cover'
    },
    textContainer: {
        flex: 1,
        padding: 12
    },
    textRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    successText: {
        paddingHorizontal: 4,
        paddingVertical: 2,
        fontWeight: '600',
        color: color.shade000,
        borderRadius: 4,
        fontSize: 10,
        overflow: 'hidden'
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
    launchTitle: {
        paddingTop: 8,
        fontWeight: '600',
        color: color.shade800,
        fontSize: 16
    },
    date: {
        color: color.shade900,
        fontSize: 14,
        fontWeight: '400',
        paddingRight: 8
    },
    time: {
        fontSize: 12,
        color: color.shade500
    }
})
