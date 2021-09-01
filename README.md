This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Structure of the application:

-Login page (default): /login

-Dashboard: /statistics

-Posts list page: /posts

## Features

-Login page with a button to request token to fetch data, then navigate to Dashboard.

-Simple header to navigate between pages.

-Dashboard shows the sidebar on the left and the table of total posts slit by week number by default. Sidebar includes a list of months (Jan to Dec) where can be selected to show:
  * Average character length of posts per month
  * Average number of posts per user per month
  * Longest posts by character length per month

-Post list that shows users list with user name and post count ordered by name alphabetically on the left side, and all posts on the right side by default.

-When a user name is clicked, that user's posts will be shown in the post list view.

-Post list where posts are ordered by creation time.

-Arrow buttons to allow choosing most recent first and most recent last ordering for posts list

-User name items, Arrow buttons and Months have active state when it's clicked.

## Further development

-Search input to search for users.

-Search input to search for posts.

-Url with parameter can be accessed directly (deep-linkable post list)

## Running application

- `git clone https://github.com/hongloans9/statistic-posts-dashboard`
- `cd statistic-posts-dashboard`
- `npm install`
- `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Other available Scripts

- `npm test`
- `npm run build`

## Screenshots

![dashboard](https://user-images.githubusercontent.com/16826885/131747789-0b4d412a-fb00-4b24-a86b-7b44abad820b.PNG)
---
![postList](https://user-images.githubusercontent.com/16826885/131747976-61a4cb91-3240-4722-9553-82b3d7391598.PNG)
---


