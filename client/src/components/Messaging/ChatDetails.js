import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    maxWidth: "60%",
    display: "inline-block",
    borderRadius: 28,
    background: "dodgerblue",

    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  },
  root2: {
    maxWidth: "60%",
    display: "inline-block",
    borderRadius: 28,
    background: "#E8E8E8",

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
    <div
      style={{
        marginLeft: "1%"
      }}
    >
      <div align="left">
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="right"
            style={{
              fontSize: "16px",
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
              fontSize: "16px",
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
              fontSize: "16px",
              color: "white"
            }}
          >
            Paper can be used to build surface or other elements for your
            application. Paper can be used to build surface or other elements
            for your application. Paper can be used ...
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
              fontSize: "16px",
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
              fontSize: "16px",
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
      <div align="left">
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="right"
            style={{
              fontSize: "16px",
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
      <div align="left">
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="left"
            style={{
              fontSize: "16px",
              color: "black"
            }}
          >
            Paper can be used to build surface or other elements for your
            application. Paper can be used to build surface or other elements
            for your application.
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
              fontSize: "16px",
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
      <div align="left">
        <Paper className={classes.root2} elevation={1}>
          <Typography
            variant="subheading"
            gutterBottom
            align="left"
            style={{
              fontSize: "16px",
              color: "black"
            }}
          >
            Paper can be used to build surface or other elements for your
            application. Paper can be used to build surface or other elements
            for your application.
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
              fontSize: "16px",
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
