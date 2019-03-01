import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";

import PlayerOfWeek from "../TopPerformers/PlayerOfWeek";
import CoachRatings from "../TopPerformers/CoachRatings";
import PictureOfWeek from "../TopPerformers/PictureOfWeek";
import VideoOfWeek from "../TopPerformers/VideoOfWeek";

const styles = theme => ({});

class TopPerformers extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3} sm={3} style={{ height: "100vh" }}>
            <PlayerOfWeek />
          </Grid>
          <Grid item xs={9} sm={9}>
            <CoachRatings />
            <br />
            <br />
            <br />
            <br />
            <Grid container spacing={24}>
              <Grid item xs={6} sm={6} style={{ height: "100vh" }}>
                <PictureOfWeek />
              </Grid>
              <Grid item xs={6} sm={6}>
                <VideoOfWeek />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TopPerformers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopPerformers);
