import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import Grid from "@material-ui/core/Grid";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10
  }
});

function PersonalInfo(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Typography variant="title" gutterBottom align="center">
              Personal Info
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Date of birth:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Position:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Height:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Weight:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Wingspan:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Vertical leap:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Time to run 40m:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Time to run 100m:
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography variant="subheading" gutterBottom align="left">
              12th Dec, 1997
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              Point Guard
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              6'4"
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              342lbs
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              2m
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              3m
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              4.5 Seconds
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              10.5 Seconds
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="title" gutterBottom align="center">
              Affiliation
            </Typography>
          </Grid>
          <Grid item xs={5} sm={5}>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Club:
            </Typography>
            <Typography
              variant="subheading"
              gutterBottom
              align="left"
              style={{
                fontWeight: "bold"
              }}
            >
              Country:
            </Typography>
          </Grid>
          <Grid item xs={7} sm={7}>
            <Typography variant="subheading" gutterBottom align="left">
              Tigerhead Power
            </Typography>
            <Typography variant="subheading" gutterBottom align="left">
              Uganda
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalInfo);
