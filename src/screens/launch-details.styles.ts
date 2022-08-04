import {Dimensions, StyleSheet} from 'react-native'
import {applyAlpha, color} from '../util/colors'

const {height, width} = Dimensions.get('window')

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width,
        height: height * 0.6,
        resizeMode: 'cover'
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
    infoBox: {
        flex: 1,
        marginTop: 24,
        marginHorizontal: 20,
        borderRadius: 8,
        borderColor: color.shade300,
        borderWidth: 1,
        padding: 12
    },
    youtubeContainer: {
        marginTop: 24,
        paddingHorizontal: 20
    },
    imageListContainer: {
        marginTop: 24,
        marginHorizontal: 20
    },
    flickrImage: {
        marginVertical: 6,
        width: '100%',
        height: 300
    }
})
