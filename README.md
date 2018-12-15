## How to Run

In Terminal:

npm install
npm start
npm run server

Visit in your web-browser:

http://localhost:3000

## Scenario

We want to render a list of tasks in React + Redux with
data that is returned from web server via a json api endpoint.

In `application.jsx` search for comments which mark
the steps which will help you read through the code
to understand end-to-end how we are going to get data
from our server and load it into our Tasks component.


## Understanding how Redux Works

### Step 1

We will call dispatch passing it an ActionCreator

### Step 2
Our ActionCreator will run, and using the crossfetch library
it will send a request to our web-server

### Step 3
Our web-server will return json and we will dispatch an
action to our reducer

### Step 4
Our reducer received the action and it proceeds to update
the redux store with the the new tasks data at:

store.tasks.collection

### Step 5
How did the data get set to `store.tasks.collection` ?
Let me explain.

You have a root reducer, and we attached a tasks_reducer
which is called tasks eg. store.tasks

We then updated the state of our tasks_reducer to have
a new key and value of collection: json eg. store.tasks.collection

### Step 6

How does the component know how to automatically update with the
latest data?

When we created our Tasks component we used the connect react-redux
fuction which connects our store's state to this component.
Anytime the store is updated the component function we pass in will
get called updating the props on the component


### Step 7

And here you can see the component props being updated, passing data
from our redux store from store.tasks.collection
