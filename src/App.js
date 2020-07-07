// import React from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import { Button } from "antd";

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Button type="primary">Click Me</Button>
//         </a>
//       </header>
//     </div>
//   );
// };

// export default App;

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
