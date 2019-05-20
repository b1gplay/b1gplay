import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    maxWidth: "60%",
    display: "inline-block",
    borderRadius: 8,
    background: "#D23E56",

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  },
  root2: {
    maxWidth: "60%",
    display: "inline-block",
    borderRadius: 8,
    background: "white",

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  searchBox: {
    padding: theme.spacing.unit * 2
  }
});

function ChatDetails(props) {
  const { classes } = props;
  return (
    <div>
      <div align="left">
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="right"
            style={{
              fontSize: "18px",
              color: "black"
            }}
          >
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
        <br />
        <br />
      </div>

      <div align="right">
        {" "}
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="left"
            style={{
              fontSize: "18px",
              color: "white"
            }}
          >
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
        <br />
        <br />
      </div>
      <div align="right">
        {" "}
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="left"
            style={{
              fontSize: "18px",
              color: "white"
            }}
          >
            Paper can be used to build surface or other elements for your
            application. Paper can be used to build surface or other elements
            for your application. Paper can be used to build surface or other
            elements for your application.
          </Typography>
        </Paper>
        <br />
        <br />
      </div>
      <div align="left">
        {" "}
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="right"
            style={{
              fontSize: "18px",
              color: "black"
            }}
          >
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
        <br />
        <br />
      </div>
      <div align="right">
        {" "}
        <Paper className={classes.root} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="left"
            style={{
              fontSize: "18px",
              color: "white"
            }}
          >
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </Paper>
        <br />
        <br />
      </div>
    </div>
  );
}

ChatDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ChatDetails);
