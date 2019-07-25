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