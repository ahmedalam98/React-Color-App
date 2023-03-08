import React, { Component } from "react";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

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
          <Button
            onClick={this.props.closeSnack}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </Button>,
        ]}
      />
    );
  }
}

export default Snack;
