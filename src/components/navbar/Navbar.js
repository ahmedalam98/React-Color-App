import React, { Component } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
//////////////////////////////////////////////
import CustomSlider from "./CustomSlider";
import "./Navbar.css";
import Snack from "./SnackBar";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { format: "hex", open: false };
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.closeSnackbar = this.closeSnackbar.bind(this);
  }

  handleFormatChange(e) {
    this.setState({ format: e.target.value, open: true });
    this.props.handleChange(e.target.value);
  }

  closeSnackbar() {
    this.setState({ open: false });
  }

  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <a href="#N/A">React Color Picker</a>
        </div>

        <div className="slider-container">
          <span>Level: {level}</span>
          <CustomSlider level={level} changeLevel={changeLevel} />
        </div>

        <div className="select-container">
          <Select value={format} onChange={this.handleFormatChange}>
            <MenuItem value="hex">HEX - #ffffff</MenuItem>
            <MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
            <MenuItem value="rgba">RGBA - rgba(255,255,255, 1.0)</MenuItem>
          </Select>
        </div>

        <Snack
          format={this.state.format}
          open={this.state.open}
          closeSnack={this.closeSnackbar}
        />
      </header>
    );
  }
}
export default Navbar;
