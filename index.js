import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider, connect } from 'react-redux'
import thunk from 'redux-thunk'
import crossfetch from 'cross-fetch'

// Tasks ActionCreator --------------------------------
function fetch() {
  return function(dispatch) {
    return crossfetch(`/api/tasks`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch({
          type: 'RECEIVE',
          collection: json
        })
      )
  }
}

// Tasks Reducers -------------------------------------
const init_state = {
  collection: []
}

const tasks_reducer = (state=init_state, action) => {
  switch (action.type) {
    case 'RECEIVE':
      return Object.assign({}, state, {
        collection: action.collection
      })
    default:
      return state
  }
};

// Root Reducers --------------------------------------
const root = combineReducers({
  tasks: tasks_reducer
})


// Render List of Tasks -------------------------------
class Tasks extends Component {
  componentDidMount(){
    this.props.dispatch(fetch())
  }

  render() {return(
    <ul>
      { this.props.collection && this.props.collection.map(model => {
        return (
          <li key={model.id}>
            {model.name}
          </li>
        )
      })}
    </ul>
  )}

  init_state(state) {
    return {
      collection: state.tasks.collection
    }
  }
}
connect(Tasks.prototype.init_state)(Tasks)

// Attach Store and Mount React------------------------
const store = createStore(root, applyMiddleware(thunk))
const el    = document.querySelector('main')

ReactDOM.render(
  <Provider store={store}>
    <Tasks />
  </Provider>
, el
)
