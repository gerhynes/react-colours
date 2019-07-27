import React, { Component } from "react";
import Palette from "./Palette";
import { generatePalette } from "./ColorHelpers";
import seedColors from "./seedColors";
import "./App.css";

class App extends Component {
  render() {
    console.log(generatePalette(seedColors[4]))
    return (
      <div className="App">
        <Palette {...seedColors[4]} />
      </div>
    );
  }
}

export default App;
