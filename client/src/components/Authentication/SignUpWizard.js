import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, Redirect } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import SportsForm from "./SportsForm";

import { connect } from "react-redux";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";

const styles = theme => ({
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  },
  link: {
    textDecoration: "none",
    color: "dodgerblue"
  }
});

const steps = ["Profile", "Account", "Sports"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <ProfileForm />;
    case 1:
      return <AccountForm />;
    case 2:
      return <SportsForm />;

    default:
      throw new Error("Unknown step");
  }
}

class SignUpWizard extends Component {
  state = {
    activeStep: 0
  };

  onSubmit = event => {
    event.preventDefault();

    // Extract values from external state
    const email = this.props.wizard.email;
    const password = this.props.wizard.password;
    const password2 = this.props.wizard.password2;

    const firstname = this.props.wizard.firstname;
    const lastname = this.props.wizard.lastname;
    const gender = this.props.wizard.gender;
    const birth_date = this.props.wizard.birthday;
    const residence_country = this.props.wizard.residence_country;

    const account_type = this.props.wizard.accountType;
    //const media_house = this.props.wizard.mediaHouse;

    const height = this.props.wizard.height;
    const position = this.props.wizard.position;
    const wingspan = this.props.wizard.wingspan;
    const vertical_leap = this.props.wizard.verticalLeap;
    const time_to_run_40m = this.props.wizard.time40m;
    const time_to_run_100m = this.props.wizard.time100m;
    const affiliation = this.props.wizard.affiliation;

    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: "Passwords do not match" });
    } else {
      const newUser = {
        email,
        password,
        firstname,
        lastname,
        gender,
        birth_date,
        residence_country,
        account_type,
        //media_house,
        height,
        position,
        wingspan,
        vertical_leap,
        time_to_run_40m,
        time_to_run_100m,
        affiliation
      };
      this.props.register(newUser);
      console.log(newUser);
    }
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }

    const nextButton = (
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={this.handleNext}
        className={classes.button}
      >
        Next
      </Button>
    );

    const registerButton = (
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        fullWidth
        onClick={this.onSubmit}
        className={classes.button}
      >
        Register User
      </Button>
    );

    return (
      <Fragment>
        <Typography component="h1" variant="h5" align="center">
          Sign Up
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Fragment>
          {activeStep === steps.length ? (
            <Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your registering.
              </Typography>
              <Typography variant="subtitle1">
                Your account is ready, we have emailed the details to your email
                given.
              </Typography>
              <br />
              <Link to="/" className={classes.link}>
                <Typography variant="h5" gutterBottom>
                  Login
                </Typography>
              </Link>
            </Fragment>
          ) : (
            <Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button
                    onClick={this.handleBack}
                    className={classes.button}
                    variant="outlined"
                    fullWidth
                  >
                    Back
                  </Button>
                )}

                {activeStep === steps.length - 1 ? registerButton : nextButton}
              </div>
            </Fragment>
          )}
        </Fragment>
      </Fragment>
    );
  }
}

SignUpWizard.propTypes = {
  classes: PropTypes.object.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  wizard: state.wizard,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register, createMessage }
)(withStyles(styles)(SignUpWizard));
