import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

//import Avatar from "@material-ui/core/Avatar";

import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
});

function FeedActionBar(props) {
  const { classes } = props;

  return (
    <Grid container spacing={24} style={{ margin: 0 }}>
      <Grid item xs={4} sm={4}>
        <Link to="/following" className={classes.link}>
          <Typography
            variant="subheading"
            gutterBottom
            align="center"
            style={{
              color: "#D23E56",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Fists
          </Typography>
          <Typography
            variant="title"
            gutterBottom
            align="center"
            color="Primary"
          >
            190
          </Typography>
        </Link>
      </Grid>

      <Grid item xs={4} sm={4}>
        <Link to="/following" className={classes.link}>
          <Typography
            variant="subheading"
            gutterBottom
            align="center"
            style={{
              color: "#D23E56",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Comments
          </Typography>

          <Typography
            variant="title"
            gutterBottom
            align="center"
            color="Primary"
          >
            190
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={4} sm={4}>
        <Link to="/followers" className={classes.link}>
          <Typography
            variant="subheading"
            gutterBottom
            align="center"
            style={{
              color: "#D23E56",
              textTransform: "uppercase",
              fontWeight: "bold"
            }}
          >
            Shares
          </Typography>
          <Typography
            variant="title"
            gutterBottom
            align="center"
            color="Primary"
          >
            243
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

FeedActionBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeedActionBar);
