import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

const AppDiv = document.getElementById("app");
render(<App />, AppDiv);
