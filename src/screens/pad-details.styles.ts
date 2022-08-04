import {Dimensions, StyleSheet} from 'react-native'
import {applyAlpha, color} from '../util/colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    gradient: {
        width,
        height: height * 0.6,
        justifyContent: 'flex-end'
    },
    imageOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginHorizontal: 20,
        marginBottom: 20
    },
    missionNameText: {
        fontSize: 28,
        fontWeight: '600',
        color: color.shade000,
        backgroundColor: applyAlpha(color.shade900, 0.5),
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
        overflow: 'hidden'
    },
    subtitleContainer: {
        flexDirection: 'row',
        paddingTop: 8
    },
    badge: {
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        borderRadius: 4,
        overflow: 'hidden'
    },
    description: {
        fontSize: 14,
        fontWeight: '500',
        color: color.shade700,
        paddingTop: 24,
        paddingHorizontal: 20
    },
    infoBox: {
        flex: 1,
        marginTop: 24,
        marginHorizontal: 20,
        borderRadius: 8,
        borderColor: color.shade300,
        borderWidth: 1,
        padding: 12
    },
    recentLaunches: {
        fontSize: 18,
        fontWeight: '600',
        color: color.shade700,
        marginLeft: 20,
        paddingTop: 24,
        paddingBottom: 16
    }
})
