import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    //send to back end, later
    this.props.nextStep();
  };

  back = e => {
      e.preventDefault();
      this.props.prevStep();
  }
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Your form was submitted.</h1>
          <p>Thank You.</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
