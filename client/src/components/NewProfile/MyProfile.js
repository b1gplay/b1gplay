import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TopPhotos from "./TopPhotos";
import TopVideos from "./TopVideos";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

function MyProfile(props) {
  const { classes } = props;

  return (
    <Grid item xs={4} style={{ marginTop: "30px" }}>
      <Typography variant="h6">Otim Tony</Typography>
      <Typography component="p" align="left">
        Uganda
      </Typography>
      <Typography component="p" align="left">
        Am the best Point Guard. I make CP3 look like a clown
      </Typography>
      <hr />
      <Grid container spacing={24}>
        <Grid item xs={4}>
          <Typography
            variant="title"
            gutterBottom
            style={{ fontSize: "13px", color: "#D23E56" }}
            align="center"
          >
            <Link to="/personalrating2">Ratings</Link>
          </Typography>
          <Typography component="p" align="center">
            56.3
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="title"
            gutterBottom
            style={{ fontSize: "13px", color: "#D23E56" }}
            align="center"
          >
            <Link to="/following1">Following</Link>
          </Typography>
          <Typography component="p" align="center">
            106
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography
            variant="title"
            gutterBottom
            style={{ fontSize: "13px", color: "#D23E56" }}
            align="center"
          >
            <Link to="/followers1">Followers</Link>
          </Typography>
          <Typography component="p" align="center">
            56
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <Paper className={classes.paper}>
        <Typography variant="button" gutterBottom align="left">
          Personal Info
          <hr />
        </Typography>
        <Typography component="p" align="left">
          Date Of Birth: 12/02/1996
        </Typography>
        <Typography component="p" align="left">
          Position: Point Guard
        </Typography>
        <Typography component="p" align="left">
          Height: 6'7
        </Typography>
        <Typography component="p" align="left">
          Weight: 342 Lbs
        </Typography>
        <Typography component="p" align="left">
          Wingspan: 2m
        </Typography>
        <Typography component="p" align="left">
          Vertical leap: 3m
        </Typography>
        <br />
        <Typography variant="button" gutterBottom align="left">
          Affiliation
          <hr />
        </Typography>
        <Typography component="p" align="left">
          Club: Tigerhead Power
        </Typography>
        <Typography component="p" align="left">
          Country: Uganda
        </Typography>
      </Paper>
      <TopPhotos />
      <TopVideos />
    </Grid>
  );
}

MyProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MyProfile);
