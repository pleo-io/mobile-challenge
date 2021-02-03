# Welcome to the Mobile Challenge 👋
Pleo is all about expenses. So ofcause we though that building a little expense feed app would be a suitable challenge for you. 
## App Description
The purpose of the app is to show a list of the expenses and allow the user to navigate to an Expense detail view. From the detail view the user should be able to get an overview of a given expense, but also to add details to it such as receipts and a note. 

## Functional requirements
We're hoping the app will end up with all the "Must have"-requirements and a few of the "Nice to have"-requirements done.
#### **Must have** 
- User can list all expenses
- User can see a detail view in a different screen

#### **Nice to have**
- User can filters on the expense list (client side filters)
- User can add a comment to an expense
- User can add a receipt image to an expense
- Expenses on the expense list are fetched gradually by using pagination

## General requirements
_Componentize your code:_ Split your code into small building blocks, showcase your software architecture skills. We're looking for clean, maintainable and reusable code.

_A visually pleasing experience:_ You don’t have to be a designer but you must have put an effort into making this look good. Show you pride in craftmanship and feel free to be creative :)

_Add a brief project description:_ Tell us a bit about your project, such as:
- Why you took a specific approach.
- How long did it take? 
- Which part was the hardest to implement? 
- What functionalities are you most proud of?

_Use libraies if needed:_ You can use libraries or frameworks as long as you explain why you chose a specific library. Also, we encourage you to write at least some your own code, this is afterall your time to shine :)

_Git history:_ Show us you work progress through your commit history

## Starting point
In this repo we're provided you with a node server, that you can use get expenses and update their details. See the [API details](https://github.com/pleo-io/mobile-challenge/tree/master/api) for implementation.

In the Pleo Mobile app we use TypeScript and [react-native-navigation](https://github.com/wix/react-native-navigation). We've initialized an almost empty React Native project, with the basic project scaffolding. Feel free to change any of this if you prefer, just mention why you chose to do so in the project description.

We've also added a few styling contants that we use in Pleo (see [`/style`](https://github.com/pleo-io/mobile-challenge/tree/master/style)), to help you get a bit closer to the styling we use in our app.

## Want to go the extra mile?
Here's few suggestion, or go crazy and implement what you think will impress us:
- Implement solution with a state management library (Redux, Mobx, VueX, Graphql, ...)
- Localization: support for multiple languages (English, French, ...)
- Support dark mode
- Implement either the expense list or detail view as a Native view with Kotlin and/or Swift. Show us how you would handle communication/navigation/state management between the realms (React Native <-> Native)  
- Explain how you would setup CI/CD (Travis/GH Actions/Fastlane/...)
- Add a Share Extension that allows the user to add a receipt to an expense from the photos app.
- Add test coverage (e2e/UI test/unit test)
