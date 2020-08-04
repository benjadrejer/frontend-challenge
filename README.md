## Background
This is a coding challenge for a frontend developer position at Novasol. The task is for us to see your coding skills and logical problem solving. If you pass the test then you will be invited to a second interview which will be based on your solution and will have a more technical focus.

## Starting the challenge

In the project directory, run these commands:

1. Install required packages
### `npm ci`

2. Start local development server
### `npm run start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

3. Start mocked api server

### `npm run start:api`

Api will be accessed through [http://localhost:3000/api/properties](http://localhost:3000/api/properties)

`json-server` was used for generating api so use [https://github.com/typicode/json-server](https://github.com/typicode/json-server) for more details.

```Make sure that you have 3000 and 4000 ports opened.```

## Requirements:
This coding challenge is based on a React application. You will have to use SCSS to style the UI (configuration has already been set up in webpack). Showcase your frontend skills to display this information in the best possible way. We prefer you would not use UI framework like material or semantic for this task. 

Please do use a version-control system (preferably git -- you can just zip the whole folder including the .git folder).

We expect you to spend 2-4 hours on this task.

## Challenge description:
At Novasol, we rent out a lot of summer houses. We would like to see a nice looking list of summer houses on a webpage based on mocked data provided (mockData.json). Showcase your frontend skills to display the information in the best possible way.

## Task 1
As a property manager at Novasol I want to be able to view properties and details on a web page. Create a nice looking list of properties that display this data.

Property details have the following fields displayed:
<ul>
  <li>Property picture</li>
  <li>Number of bedrooms</li>
  <li>Number of bathrooms</li>
  <li>Guest count that can be accomodated</li>
  <li>City (Required)</li>
  <li>Price per night</li>
</ul>

## Task 2
Novasol has a thousands of rental houses, so showing all of them would overwhelm the user. We want you to make a price filter which would filter the results according to the selected price range in the filter.

## Optional
A nice looking UI and good code structure with tests will be a plus.

Sometimes API can go down or load slowly or would come with wrong data. We would like to see if you can handle these situations from a front-end side, so you could give a user the best expierence in this situation. If it takes too much time, write a MVP concept in code and tell us in the interview how would you approach that if you had more time.

Complete the tasks according to your skill level. It's better to do less, but with a good code structure than complete everything with messy code. Show us your best and good luck!
