import React, { Component } from "react";
import Layout from "./Containers/Layout/Layout";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createBrowserHistory } from "history";

// import { Layout } from "antd";

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={createBrowserHistory()} >
          <Route path="/" component={Layout} />
        </Router>
      </Provider>
    );
  }
}

export default App;
