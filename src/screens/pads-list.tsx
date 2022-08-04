import React, {VFC} from 'react'
import {FlatList, SafeAreaView} from 'react-native'
import {LayoutComponent, Navigation} from 'react-native-navigation'
import {EmptyState} from '../components/empty-state'
import {PadListCell} from '../components/pad-list-cell'
import {Pad} from '../api/types'
import {PADS_STACK} from '../navigation/navigation'
import {usePadsPaginated} from '../api/use-space-x'
import {PadDetailLayout} from './pad-details'

const PAGE_SIZE = 10

const PadsList: VFC = () => {
    const {data, size, setSize} = usePadsPaginated({
        limit: PAGE_SIZE
    })

    const goToPad = (pad: Pad) => {
        Navigation.push(PADS_STACK, PadDetailLayout({siteId: pad.site_id}))
    }

    if (data === undefined) {
        return <EmptyState loading />
    }

    return (
        <SafeAreaView>
            <FlatList
                data={data?.flat() ?? []}
                renderItem={item => (
                    <PadListCell pad={item.item} onPress={goToPad} />
                )}
                onEndReached={() => setSize(size + 1)}
                style={{height: '100%'}}
            />
        </SafeAreaView>
    )
}

export const PadsListLayoutName = 'PadsList'

export const PadsListLayout = (): LayoutComponent => ({
    name: PadsListLayoutName,
    options: {
        topBar: {
            title: {
                text: 'Pads'
            },
            largeTitle: {
                visible: true
            }
        }
    }
})

export default PadsList
