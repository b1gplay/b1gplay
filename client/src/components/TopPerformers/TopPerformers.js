import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import PlayerOfWeek from "../TopPerformers/PlayerOfWeek";
import CoachRatings from "../TopPerformers/CoachRatings";
import PictureOfWeek from "../TopPerformers/PictureOfWeek";
import VideoOfWeek from "../TopPerformers/VideoOfWeek";
import AgeFilter from "../TopPerformers/AgeFilter";
import GeneralFilter from "../TopPerformers/GeneralFilter";

const styles = theme => ({});

class TopPerformers extends React.Component {
  render() {
    //const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item xs={3} sm={3} style={{ height: "100vh" }}>
            <GeneralFilter />
          </Grid>
          <Grid item xs={9} sm={9}>
            <AgeFilter />
            <CoachRatings />
            <Grid container spacing={24}>
              <Grid item xs={4} sm={4} style={{ height: "100vh" }}>
                <PlayerOfWeek />
              </Grid>
              <Grid item xs={4} sm={4} style={{ height: "100vh" }}>
                <PictureOfWeek />
              </Grid>
              <Grid item xs={4} sm={4}>
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
