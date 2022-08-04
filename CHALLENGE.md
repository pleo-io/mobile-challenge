# The Pleo Mobile Challenge

Here at Pleo we love space. For example, we name all our microservices after
moons of the solar system. But before you get to the moons, you have to go
through rockets. Welcome to our mobile challenge!

We've built a simple mobile app that displays information about rocket launches,
fetched from the unofficial SpaceX API V3 at
[spacexdata.com](https://docs.spacexdata.com/?version=latest). We want you to
make a few changes to the app.

## Tasks

### **1. Fix a bug**

The team discovered that the launch datetime on the launch details screen is displayed in the timezone of the app's user. However, the intent was to show it in the local timezone of the launch site while still displaying the timezone offset.

Consider the following example:
- A rocket is launched November 21, 2020 at 09:17 in local time California, US (timezone UTC-8)
- Currently, if the user of the app is located in Copenhagen (timezone GMT+1), they will see the launch time as "November 21, 2020, 6:17 PM GMT+1".
- Instead they should see the launch time displayed in the launch sites local time zone, as "November 21, 2020, 9:17 AM UTC-8"

After a discussion the team decided to make the change. You picked up that ticket.


#### Guidelines for Task 1

- Treat this as if you fixed a bug in an app you work on together with a team,
  and the app is in production.

### **2. Build a feature**

We would like you to add a "favorites" feature to the app. The requirements are:

- A user can mark - "star" - launches or launch pads as favorites - both from
  the list and details page for all items
- A list of favorites is available as a third tab in the tab bar.
- From the list, the user can navigate to the favorite items
- The user is able to remove items from the list (from within the list and on
  the details page of an item that is currently in the list)
- The list is persisted after the app is closed (but everything is stored
  locally for now)

#### Guidelines for Task 2

- Treat this as if you implemented a new feature in an app you work on together
  with a team, and the app is in production.
- This app is not finished, there will be more pages added in the future, and
  the feature you're implementing might be extended - consider that when
  building your solution.
- When in doubt about the design or functionality, make a decision yourself.
- Try not to spend more than a few hours on this task. You can use the PR description 
  to list and discuss the things you decided to de-scope, potential next steps etc.

### **3. Impress us**

This last task is a chance for you to impress us. What you do is really up to
you - show us your best skills, be creative and try not to spend more than a few
hours. You can add a new feature (e.g. filtering of lists), or a whole new
section to the app (explore the API, there is a ton we haven't used yet), add a UI test suite, 
improve the tooling or app's architecture, add beautiful animations, etc.

#### Guidelines for Task 3

- Treat this last task as a little hackathon - no need for covering
  all edge cases - although the code quality still matters.
- Scope the work so you can finish within a few hours - you can use the PR
  description to list and discuss the things you decided to de-scope.

## Practicalities

When you're ready to work on the challenge, clone (and not fork) the repo and
implement each task as a separate pull request against your version of the repo.
Prepare the PRs as if you would when contributing to a project you develop with
a team. Merge each PR when you're done with a task.

When you're ready to submit your challenge, share the link to your repo with us.
If you prefer to keep it private, we will provide you with some emails to invite
to the repo.

We're excited to have you take on this challenge and looking forward to seeing
your solution. 

Happy coding!
