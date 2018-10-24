import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';



let myState = {
  counts: {
    counter: 0
  }
}



let initialState = {
  counter: 1
}

function myCoolReducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT': {
      return {
        ...state,
        counter: state.counter + 1
      }
    }
    default: {
      return state;
    }
  }
}

let store = createStore(combineReducers({
  counts: myCoolReducer
}))


// import CoolComponent from './CoolComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>      
          <EnhancedMyCoolComponent />
        </Provider>
      </div>
    );
  }
}

export default App;


const CoolComponent = ({name, counter, ...props}) => {
  console.log(props)
  return <div>Hello {name} {counter}
  
    <div onClick={() => {
      props.dispatch({
        type: 'INCREMENT',

      })
    }}>click me</div>
  </div>
}

const EnhancedMyCoolComponent = connect((state) => {
  return {
    name: 'Kieran',
    ...state.counts
  }
})(CoolComponent)