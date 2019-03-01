import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: 0,
    marginLeft: -70,
    marginRight: -70,
    marginTop: -17
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
  },
  paperContainer: {
    width: "100%",
    height: 186,
    marginLeft: 0,
    marginRight: 0,
    backgroundImage: `url(${"static/images/ll.jpg"})`
  }
});

function CoverProfile(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paperContainer} elevation={1} />

      <Paper className={classes.root}>
        <Tabs indicatorColor="primary" textColor="secondary" centered>
          <Tab label="Rated Players" style={{ color: "#D23E56" }} />
          <Tab label="Following" style={{ color: "#D23E56" }} />
          <Tab label="Followers" style={{ color: "#D23E56" }} />
          <Tab label="Photos" style={{ color: "#D23E56" }} />
          <Tab label="Videos" style={{ color: "#D23E56" }} />
          <Tab label="Compose" style={{ color: "#D23E56" }} />
        </Tabs>
      </Paper>
    </div>
  );
}

CoverProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CoverProfile);
