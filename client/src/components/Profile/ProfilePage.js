import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import { Switch, Route } from "react-router-dom";
import Timeline from "./Timeline";
import CoverProfile from "./CoverProfile";
import PhotoGallery from "../Gallery/PhotoGallery";
import VideoGallery from "../Gallery/VideoGallery";

import Rating from "./Rating";

import MyProfile from "./MyProfile";

import Header from "../Layout/Header";

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
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  ratingColumn: {
    position: "fixed",
    top: "8%",
    bottom: 0,
    right: 0,
    width: "100%"
  }
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Header />
        <Grid container spacing={40}>
          <Grid item lg={8} xs={12}>
            <CoverProfile />

            <Switch>
              <Route path="/videos" component={VideoGallery} />
              <Route path="/photos" component={PhotoGallery} />
              <Route path="/" component={Timeline} />
            </Switch>
          </Grid>
          {/* <Grid item xs={1} /> */}
          <Grid item lg={4} className={classes.ratingColumn}>
            <MyProfile />
            <br />
            <Rating />
            {/*   <OnlineChats /> */}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
