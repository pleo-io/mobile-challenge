import {LayoutTabsChildren, Navigation} from 'react-native-navigation'
import {color} from '../util/colors'
import LaunchesList, {
    LaunchesListLayout,
    LaunchesListLayoutName
} from '../screens/launches-list'
import {ImageRequireSource} from 'react-native'
import LaunchDetails, {
    LaunchDetailLayout,
    LaunchDetailLayoutName
} from '../screens/launch-details'
import PadsList, {
    PadsListLayout,
    PadsListLayoutName
} from '../screens/pads-list'
import PadDetails, {
    PadDetailLayout,
    PadDetailLayoutName
} from '../screens/pad-details'

export const registerScreens = () => {
    Navigation.events().registerAppLaunchedListener(() => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                    children: [launchesTab, padsTab]
                }
            }
        })
    })

    Navigation.registerComponent(LaunchesListLayoutName, () => LaunchesList)
    Navigation.registerComponent(LaunchDetailLayoutName, () => LaunchDetails)
    Navigation.registerComponent(PadsListLayoutName, () => PadsList)
    Navigation.registerComponent(PadDetailLayoutName, () => PadDetails)
}

const bottomTab = (icon: ImageRequireSource) => ({
    icon,
    iconColor: color.shade400,
    selectedIconColor: color.shade700,
    iconInsets: {top: 5, bottom: -5}
})

// Launches List

export const LAUNCHES_STACK = 'LaunchesStack'

const launchesTab: LayoutTabsChildren = {
    stack: {
        id: LAUNCHES_STACK,
        children: [
            {
                component: LaunchesListLayout()
            }
        ],
        options: {
            bottomTab: bottomTab(require('../../assets/icons/rocket.png'))
        }
    }
}

// Pads List

export const PADS_STACK = 'PadsStack'

const padsTab: LayoutTabsChildren = {
    stack: {
        id: PADS_STACK,
        children: [
            {
                component: PadsListLayout()
            }
        ],
        options: {
            bottomTab: bottomTab(require('../../assets/icons/bullseye.png'))
        }
    }
}
