import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

function reducer(state, action){
  return state;
}
const initialState = { value: 0 };

const store = createStore(reducer, initialState);

function Counter() {
  return (
    <div>
      <button>+</button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  );
}
