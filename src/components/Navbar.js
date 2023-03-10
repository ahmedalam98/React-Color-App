import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
//////////////////////////////////////////////
import CustomSlider from "./CustomSlider";
import "../styles/Navbar.css";
import Snack from "./SnackBar";
import { Link } from "react-router-dom";

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
    const { level, changeLevel, showingAllColors } = this.props;
    const { format } = this.state;
    return (
      <header className="Navbar">
        <div className="logo">
          <Link to="/" className="link">
            React Color Picker
          </Link>
        </div>

        {showingAllColors && (
          <div className="slider-container">
            <span>Level: {level}</span>
            <CustomSlider level={level} changeLevel={changeLevel} />
          </div>
        )}

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
