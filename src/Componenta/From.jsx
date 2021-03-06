import React from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";

export default class Form extends React.Component {
  state = {
    formData: {
      userName: "",
      email: "",
      password: ""
    },
    submitted: false
  };

  handleChange = (event) => {
    const { formData } = this.state;
    formData[event.target.name] = event.target.value;
    this.setState({ formData });
  };

  handleSubmit = () => {
    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
    });
  };

  render() {
    const { formData, submitted } = this.state;
    return (
      <ValidatorForm className="valid" ref="form" onSubmit={this.handleSubmit}>
        <h2>Form</h2>
        <TextValidator
          label="User Name"
          onChange={this.handleChange}
          name="userName"
          value={formData.userName}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            )
          }}
          validators={["required"]}
          errorMessages={["User Name is required"]}
        />
        <TextValidator
          label="Email"
          onChange={this.handleChange}
          name="email"
          value={formData.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            )
          }}
          validators={["required", "isEmail"]}
          errorMessages={["Email is required", "email is not valid"]}
        />
        <br />
        <TextValidator
          label="Password"
          onChange={this.handleChange}
          name="password"
          value={formData.password}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            )
          }}
          validators={["required"]}
          errorMessages={["password is required"]}
        />
        <br />
        <Button
          color="primary"
          variant="contained"
          type="submit"
          disabled={submitted}
        >
          {(submitted && "Your form is submitted!") || (!submitted && "Submit")}
        </Button>
      </ValidatorForm>
    );
  }
}
