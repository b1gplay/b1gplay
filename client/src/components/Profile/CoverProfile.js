import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Post from "./Post";
import { Link } from "react-router-dom";

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
    height: 330,
    marginTop: -59,
    backgroundImage: `url(${"/static/images/dd.jpg"})`
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

function CoverProfile(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paperContainer} elevation={1}>
        <div
          style={{
            paddingLeft: "3%",
            paddingTop: "17%"
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/7.jpg"
            style={{
              //margin: 10,
              width: 170,
              height: 170,
              border: "5px solid white"
            }}
          />
        </div>
      </Paper>

      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="secondary" centered>
          <Link to="/profile1/photos" className={classes.link}>
            <Tab
              label="Photos"
              //icon={<PhotoCameraIcon />}
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>

          <Link to="/profile1/videos" className={classes.link}>
            <Tab
              label="Videos"
              //icon={<VideoLibraryIcon />}
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
          <Post />
        </Tabs>
      </Paper>
      <br />
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
