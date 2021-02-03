import {Navigation} from 'react-native-navigation'
import ExpenseFeed from './ExpenseFeed'

enum Screen {
    ExpenseFeed = 'pleo.ExpenseFeed'
}

Navigation.registerComponent(Screen.ExpenseFeed, () => ExpenseFeed)

Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: Screen.ExpenseFeed,
                        },
                    },
                ],
            },
        },
    })
})
