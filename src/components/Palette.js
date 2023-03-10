import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "../styles/Palette.css";
import Navbar from "./navbar/Navbar";
import PaletteFooter from "./PaletteFooter";

class Palette extends Component {
  constructor(props) {
    super(props);
    // Make a default state to control it using <Slider/> component
    this.state = { level: 500, format: "hex" };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { level, format } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox
        background={color[format]}
        name={color.name}
        key={color.id}
        // Passing palette id & color id to make the URL params in ColorBox
        moreUrl={`/palette/${id}/${color.id}`}
        showLink
      />
    ));

    return (
      <div className="Palette">
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showingAllColors
        />
        <div className="Palette-colors">{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}
export default Palette;
