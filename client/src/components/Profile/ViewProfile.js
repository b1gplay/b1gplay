import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ChatRoom from "../Messaging/ChatRoom";
import Clipboard from "../Clipboard/Clipboard";
import MyProfile from "../Profile/MyProfile";
import CoverProfile from "../Profile/CoverProfile";
import PersonalInfo from "../Profile/PersonalInfo";
import PhotoVideoFeed from "../Profile/PhotoVideoFeed";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "white"
  },
  avatar: {
    margin: 10
  },

  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  }
});

class ViewProfile extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <CoverProfile />
        <br />
        <br />
        <br />
        <Grid container spacing={24}>
          <Grid item xs={3} sm={3} style={{ height: "100vh" }}>
            <div>
              <MyProfile />
            </div>
            <br />
            <br />
            <div>
              <Paper className={classes.root} elevation={1}>
                <PersonalInfo />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={5} sm={5} style={{ height: "100vh" }}>
            <div>
              <Paper className={classes.root} elevation={0}>
                <PhotoVideoFeed />
                <PhotoVideoFeed />
                <PhotoVideoFeed />
                <PhotoVideoFeed />
                <PhotoVideoFeed />
                <PhotoVideoFeed />
              </Paper>
            </div>
          </Grid>
          <Grid item xs={2} sm={2} style={{ height: "100vh" }} />
          <Grid
            item
            xs={2}
            sm={2}
            style={{ borderLeft: "1px solid #d4d4d4", height: "100vh" }}
          >
            <Typography
              variant="subtitle2"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              CLIPBOARD
            </Typography>
            <Clipboard />
            <br />
            <Typography
              variant="subtitle2"
              gutterBottom
              align="center"
              style={{ fontWeight: "bold" }}
            >
              CHAT
            </Typography>
            <ChatRoom />
          </Grid>
        </Grid>
      </div>
    );
  }
}

ViewProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ViewProfile);
