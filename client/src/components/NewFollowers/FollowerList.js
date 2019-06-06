import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import OneFollowing from "./OneFollower";

const styles = theme => ({
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

function FollowingList(props) {
  //const { classes } = props;

  return (
    <div>
      <br />

      <Typography
        variant="display1"
        gutterBottom
        align="center"
        style={{ color: "black" }}
      >
        Followers
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
        <Grid item xs={4} sm={4}>
          <OneFollowing />
        </Grid>
      </Grid>
    </div>
  );
}

FollowingList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FollowingList);
