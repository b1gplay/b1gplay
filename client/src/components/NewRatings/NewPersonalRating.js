import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Rebounding from "./Rebounding";
import Defence from "./Defence";
import Scoring from "./Scoring";
import Leadership from "./Leadership";
import Discipline from "./Discipline";
import BasketballIQ from "./BasketballIQ";
import Energy from "./Energy";
import Determination from "./Determination";
import Clutch from "./Clutch";
import Propotential from "./Propotential";
import Total from "./Total";

import RatersPieChart from "./RatersPieChart";

const styles = theme => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.6em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 100
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  avatar: {
    margin: 10
  }
});

function PersonalRatings(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <br />

      <Grid container spacing={24}>
        <Grid item lg={3} xs={12} sm={6}>
          <Rebounding />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Defence />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Scoring />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Leadership />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />

      <Grid container spacing={24}>
        <Grid item lg={3} xs={12} sm={6}>
          <Discipline />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <BasketballIQ />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Energy />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Determination />
        </Grid>
      </Grid>
      <br />
      <br />
      <br />

      <Grid container spacing={24}>
        <Grid item lg={3} xs={12} sm={6}>
          <Clutch />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Propotential />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <Total />
        </Grid>
        <Grid item lg={3} xs={12} sm={6}>
          <RatersPieChart />
        </Grid>
      </Grid>
      <br />
    </div>
  );
}

PersonalRatings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PersonalRatings);
