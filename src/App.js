import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import {increment} from './actions';

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
    case 'SET_VALUE': {
      return {
        ...state,
        counter: action.payload.value
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


const CoolComponent = ({name, counter, actions, ...props}) => {
  console.log(props)
  return <div>Hello {name} {counter}
    <div onClick={() => actions.increment(4)}>click me</div>
  </div>
}



const mapStateToProps = (state) => {
  return {
    name: 'Kieran',
    ...state.counts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      increment
    }, dispatch)
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: (...args) => dispatch(increment(...args))
//   }
// } 

// const mapDispatchToProps = { increment } 

const EnhancedMyCoolComponent = connect(mapStateToProps, mapDispatchToProps)(CoolComponent)


