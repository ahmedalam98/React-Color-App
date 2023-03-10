import React, { Component } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class Snack extends Component {
  render() {
    return (
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={this.props.open}
        autoHideDuration={2000}
        message={
          <span id="message-id">
            Format Changed To {this.props.format.toUpperCase()}
          </span>
        }
        ContentProps={{
          "aria-describedby": "message-id",
        }}
        onClose={this.props.closeSnack}
        action={[
          <IconButton
            onClick={this.props.closeSnack}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    );
  }
}

export default Snack;
