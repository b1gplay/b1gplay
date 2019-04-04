import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from '@material-ui/core/Button';
import Post from './Post';
import GroupIcon from "@material-ui/icons/Group";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import TimelineIcon from "@material-ui/icons/Timeline";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link';

const styles = theme => ({
  root: {},
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
  },
  paperContainer: {
    width: "100%",
    height: 220,
    marginTop: -40,
    backgroundImage: `url(${"/static/images/ll.jpg"})`
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

function Cover(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <br />
      <Paper className={classes.paperContainer} elevation={1}>
        <div
          style={{
            paddingTop: "6.5%",
            paddingLeft: "7%"
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/7.jpg"
            style={{
              marginTop: 110,
              width: 130,
              height: 130,
              border: "5px solid white"
            }}
          />
        </div>
      </Paper>

      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="secondary" >

          <Link to="/profile/photos" className={classes.link} style={{ marginLeft: "280px" }}>
            <Tab
              label="Photos"
              icon={<PhotoCameraIcon />}
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderLeft: "1px solid #d4d4d4",
                borderRight: "1px solid #d4d4d4",
                width: "175px",
              }}
            />
          </Link>
          
          <Link to="/profile/videos" className={classes.link}>
            <Tab
              label="Videos"
              icon={<VideoLibraryIcon />}
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4",
                width: "175px",
              }}
            />
          </Link>

          < Post />
        </Tabs>
      </Paper>
    </div>
  );
}

Cover.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cover);
