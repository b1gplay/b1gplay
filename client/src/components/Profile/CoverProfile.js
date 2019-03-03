import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
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
    height: 250,
    marginTop: -40,
    backgroundImage: `url(${"/static/images/ll.jpg"})`
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
      <br />
      <Paper className={classes.paperContainer} elevation={1}>
        <div
          style={{
            paddingTop: "6.2%",
            paddingLeft: "3%"
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/7.jpg"
            style={{
              margin: 10,
              width: 170,
              height: 170,
              border: "5px solid white"
            }}
          />
        </div>
      </Paper>

      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="secondary" centered>
          <Link to="/profile/rated-players" className={classes.link}>
            <Tab
              label="Rated Players"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderLeft: "1px solid #d4d4d4",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>

          <Link to="/profile/following" className={classes.link}>
            <Tab
              label="Following"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
          <Link to="/profile/followers" className={classes.link}>
            <Tab
              label="Followers"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
          <Link to="/profile/photos" className={classes.link}>
            <Tab
              label="Photos"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
          <Link to="/profile/videos" className={classes.link}>
            <Tab
              label="Videos"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
          <Link to="/profile/compose" className={classes.link}>
            <Tab
              label="Compose"
              style={{
                color: "#D23E56",
                fontWeight: "bold",
                borderRight: "1px solid #d4d4d4"
              }}
            />
          </Link>
        </Tabs>
      </Paper>
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
