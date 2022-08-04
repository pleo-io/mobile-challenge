import React, {VFC} from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {LayoutComponent, Navigation} from 'react-native-navigation'
import {Launch} from '../api/types'
import {useLaunchesPaginated} from '../api/use-space-x'
import {LAUNCHES_STACK} from '../navigation/navigation'
import {LaunchDetailLayout} from './launch-details'
import {LaunchListCell} from '../components/launch-list-cell'
import {EmptyState} from '../components/empty-state'

const PAGE_SIZE = 10

const LaunchesList: VFC = () => {
    const {data, size, setSize} = useLaunchesPaginated({
        limit: PAGE_SIZE,
        order: 'desc',
        sort: 'launch_date_utc'
    })

    const goToLaunch = (launch: Launch) => {
        Navigation.push(
            LAUNCHES_STACK,
            LaunchDetailLayout({flightNumber: launch.flight_number})
        )
    }

    if (data === undefined) {
        return <EmptyState loading />
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data?.flat() ?? []}
                renderItem={item => (
                    <LaunchListCell launch={item.item} onPress={goToLaunch} />
                )}
                onEndReached={() => setSize(size + 1)}
                style={{height: '100%'}}
            />
        </SafeAreaView>
    )
}

export const LaunchesListLayoutName = 'LaunchesList'

export const LaunchesListLayout = (): LayoutComponent => ({
    name: LaunchesListLayoutName,
    options: {
        topBar: {
            title: {
                text: 'Launches'
            },
            largeTitle: {
                visible: true
            }
        }
    }
})

export default LaunchesList
