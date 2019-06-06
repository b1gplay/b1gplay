import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PictureOfWeek from "./PictureOfWeek";
import VideoOfWeek from "./VideoOfWeek";

const styles = theme => ({
  // Styled scrollbar
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
  root: {
    padding: theme.spacing.unit * 2
  },
  avatar: {},
  bigAvatar: {
    width: 100,
    height: 100
  }
});

function NewStars(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />

      <br />
      <Grid container spacing={24}>
        <Grid item xs={6} sm={6}>
          <PictureOfWeek />
        </Grid>
        <Grid item xs={6} sm={6}>
          <VideoOfWeek />
        </Grid>
      </Grid>
    </div>
  );
}

NewStars.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NewStars);
