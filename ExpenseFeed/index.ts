import {Navigation} from 'react-native-navigation'
import ExpenseDetail from './ExpenseDetail'
import ExpenseFeed from './ExpenseFeed'

export enum Screen {
    ExpenseFeed = 'pleo.ExpenseFeed',
    ExpenseDetail = 'pleo.ExpenseDetail'
}

Navigation.registerComponent(Screen.ExpenseFeed, () => ExpenseFeed)
Navigation.registerComponent(Screen.ExpenseDetail, () => ExpenseDetail)

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
