import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
export class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    this.setState({
      step: this.step + 1
    });
  };
  prevStep = () => {
    this.setState({
      step: this.step - 1
    });
  };
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    } = this.state;
    const values = { step, firstName, lastName, email, occupation, city, bio };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>FormPersonalDetails</h1>;
      case 3:
        return <h1>Confirm</h1>;
        default:
    }
  }
}

export default UserForm;
