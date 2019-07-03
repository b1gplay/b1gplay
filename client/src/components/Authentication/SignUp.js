import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";

import SignUpWizard from "./SignUpWizard";
import Header1 from "../Layout/Header1";

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },

  gridContainer: {
    marginTop: -20,
    marginLeft: -24,
    marginRight: -70,
    //marginRight: "auto",
    //marginLeft: "auto",
    height: "auto",
    backgroundSize: "100vw 100vh",
    minHeight: "100%",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"/static/images/s.jpg"})`,
    zIndex: 1000,
    position: "fixed"
  }
});

function Login(props) {
  const { classes } = props;

  return (
    <div>
      <Header1 />
      <Grid container spacing={24} className={classes.gridContainer}>
        <Grid item xs={6} sm={1} />
        <Grid item xs={6} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12} style={{ marginTop: 30 }}>
              <Typography variant="h4" style={{ color: "#ffffff" }}>
                Where sports and society meet
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontSize: "17px", color: "#ffffff" }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={1} />
        <Grid item lg={4} sm={12}>
          <br /> <br /> <br />
          <Paper
            className={classes.paper}
            style={{
              marginRight: 80
            }}
          >
            <SignUpWizard />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
