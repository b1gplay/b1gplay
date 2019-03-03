import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  media: {
    height: 140
  }
});

function CoverProfile(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Grid container justify="center" alignItems="center" />

        <Typography variant="title" gutterBottom align="center">
          Otim Tony
        </Typography>
        <Typography
          variant="subheading"
          gutterBottom
          align="center"
          color="primary"
        >
          Ugandan
        </Typography>

        <Typography variant="body1" gutterBottom align="center" color="Primary">
          <text style={{ color: "black" }}>Born on </text> 27th September, 1993
        </Typography>
        <Typography
          component="p"
          align="center"
          color="textSecondary"
          gutterBottom
        >
          @otimtony
        </Typography>
        <Typography component="p" align="center">
          Am the chosen one.
        </Typography>

        <div>
          <br />
          <Grid container spacing={24}>
            <Grid item xs={4} sm={4}>
              <Typography variant="title" gutterBottom align="center">
                Posts
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                align="center"
                color="Primary"
              >
                700
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="title" gutterBottom align="center">
                Following
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                align="center"
                color="Primary"
              >
                190
              </Typography>
            </Grid>
            <Grid item xs={4} sm={4}>
              <Typography variant="title" gutterBottom align="center">
                Followers
              </Typography>
              <Typography
                variant="title"
                gutterBottom
                align="center"
                color="Primary"
              >
                243
              </Typography>
            </Grid>
          </Grid>
        </div>
      </Paper>
      <br />
      <br />
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          Intro
        </Typography>
        <br />
        <Typography component="p">
          Im the best point guard in the game since <b>December 2017</b>
        </Typography>
      </Paper>
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
