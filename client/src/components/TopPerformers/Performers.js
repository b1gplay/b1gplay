import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import OneStar from "./OneStar";

import AgeFilter from "./AgeFilter";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  avatar: {},
  bigAvatar: {
    width: 100,
    height: 100
  }
});

function Performers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <Grid container spacing={24}>
        <Grid item xs={4} sm={4}>
          <AgeFilter />
          <br />
          <br />
          <br />
        </Grid>
      </Grid>

      <Grid container spacing={24}>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Rebounder</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Scorer</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Defender</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Leader</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Discipline</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Basketball I.Q</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Energy</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Determination</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Clutch</b>
          </Typography>
          <OneStar />
        </Grid>
        <Grid item xs={4} sm={4}>
          <Typography variant="subheading" gutterBottom align="center">
            <b>Pro-potential</b>
          </Typography>
          <OneStar />
        </Grid>
      </Grid>
    </div>
  );
}

Performers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Performers);
