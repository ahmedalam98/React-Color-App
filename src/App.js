import React, { Component } from "react";
import Palette from "./components/Palette";
import seedColors from "./components//helpers/seedColors";
import { generatePalette } from "./components/helpers/colorHelper";

class App extends Component {
  render() {
    return (
      <div>
        <Palette palette={generatePalette(seedColors[4])} />{" "}
      </div>
    );
  }
}

export default App;
