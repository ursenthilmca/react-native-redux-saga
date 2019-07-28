# react-native-redux-saga

# Create the react native project using command line 
 create-react-native-app init login


Next setp, install the dependency

npm install --save redux-saga

Redux-saga is a one of the middleware used to make a Async operations Like (Fetch the data from API).

Create the store in App.js.

#App.js

import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./app/config-store";
import Login from "./app/modules/login";

class App extends Component {
  render(){
    const store = configureStore(window.__INITIAL_STATE__);
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;

Create the saga middleware config-store.js

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./root-reducer";
import rootWatchers from "./root-saga";


export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware)
    )
    store.runSaga = sagaMiddleware.run(rootWatchers)
    return store
}



