import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Cover from './Cover';
import MyProfile from './MyProfile';
import Typography from "@material-ui/core/Typography";
import Post from './Post';
import Feed from './Feed';
import Rating from './Rating';
import OnlineChats from './OnlineChats';
import Followers from "./Followers";
import Following from "./Following";

import { Switch, Route, Redirect } from "react-router-dom";
import ChatRoom from "../Messaging/ChatRoom";
import Clipboard from "../Clipboard/Clipboard";

import PhotoGallery from "../Gallery/PhotoGallery";
import VideoGallery from "../Gallery/VideoGallery";


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Profile extends React.Component {
  render() {
    const { classes } = this.props;
      return (
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={8}>
              < Cover />
              <Grid container spacing={24}>
                < MyProfile />
                <Grid item xs={8}>
                  < Feed />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              < Rating />
              < OnlineChats />
            </Grid>
          </Grid>
        </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);