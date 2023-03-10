import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "../styles/CustomSlider.css";

class CustomSlider extends Component {
  render() {
    const { level, changeLevel } = this.props;
    return (
      <div className="slider">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onChange={changeLevel}
        />
      </div>
    );
  }
}

export default CustomSlider;
