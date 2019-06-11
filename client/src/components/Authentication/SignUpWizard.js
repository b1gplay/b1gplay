import React from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

import ProfileForm from "./ProfileForm";
import AccountForm from "./AccountForm";
import SportsForm from "./SportsForm";

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

class SignUpWizard extends React.Component {
  state = {
    activeStep: 0
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

    return (
      <React.Fragment>
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
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
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
            </React.Fragment>
          ) : (
            <React.Fragment>
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
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  onClick={this.handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Register User" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
      </React.Fragment>
    );
  }
}

SignUpWizard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignUpWizard);
