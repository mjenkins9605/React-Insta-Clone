import React, { Component } from "react";
import "./App.css";

import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/Authentication/withAuthenticate";
import Login from "./components/Login/Login";

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <ComponentAuth />
      </div>
    );
  }
}

const ComponentAuth = withAuthenticate(PostsPage)(Login);

export default App;