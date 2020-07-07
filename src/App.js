import React, { Component } from "react";
import Home from "./Containers/Home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/:filter?" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;
