import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

import Dialog from "@material-ui/core/Dialog";
//import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import RatingForm from "./RatingForm";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },

  media: {
    height: 340
  },

  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: "none"
  }
});

const raters = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coaches",
    label: "Coaches"
  },
  {
    value: "Players",
    label: "Players"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Scouts",
    label: "Scouts"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Agents",
    label: "Agents"
  }
];
class Ratings extends Component {
  state = {
    open: false,
    follow: false
  };

  handleClick = event => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleFollow = () => {
    this.setState({ follow: !this.state.follow });
  };

  ratePlayer = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;
    const { follow } = this.state;

    return (
      <Fragment>
        <Grid item xs={12}>
          <Paper className={classes.root} elevation={1}>
            <Grid container justify="center" alignItems="center" />
            <div>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={6}>
                  <Typography
                    variant="title"
                    gutterBottom
                    style={{
                      fontWeight: "bold",
                      color: "#C12424",
                      fontSize: "24px"
                    }}
                  >
                    Personal Ratings
                  </Typography>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    //required
                    id="raters"
                    select
                    name="raters"
                    onChange={this.onChange}
                    label="Raters"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}
                  >
                    {raters.map(option => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
              </Grid>
            </div>

            <Grid container justify="center" alignItems="center" />
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Rebounding
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.7
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Defence
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    7.7
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Scoring
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.1
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Leadership
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Discipline
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.9
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Basketball IQ
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.2
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Energy
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.8
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Determination
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    8.7
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Clutch
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    7.9
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={4} sm={4}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    Pro-potential
                  </Typography>
                </Grid>
                <Grid item xs={7} sm={7}>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                  <span style={{ margin: "1px" }}>
                    <img
                      src="static/images/basketball.jpg"
                      alt="basketball icon"
                      style={{ width: 24, height: 24 }}
                    />
                  </span>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <Typography
                    variant="subtitle2"
                    gutterBottom
                    //style={{ fontSize: "13px" }}
                  >
                    9.2
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={10} sm={10}>
                  <Typography
                    variant="title"
                    gutterBottom
                    style={{ fontWeight: "bold" }}
                  >
                    Total
                  </Typography>
                </Grid>
                <Grid item xs={2} sm={2}>
                  <Typography
                    variant="title"
                    gutterBottom
                    align="right"
                    style={{ fontWeight: "bold" }}
                  >
                    84.2
                  </Typography>
                </Grid>
              </Grid>
            </div>
            <div>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={6}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    fullWidth
                    style={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "18px",
                      background: "#C12424"
                    }}
                    onClick={this.ratePlayer}
                  >
                    Rate Player
                  </Button>
                </Grid>
                <Grid item xs={6} sm={6}>
                  <Button
                    variant="contained"
                    size="medium"
                    color="secondary"
                    fullWidth
                    style={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "18px",
                      background: "#C12424"
                    }}
                    onClick={this.handleFollow}
                  >
                    {!follow ? "Follow" : "Unfollow"}
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Paper>
        </Grid>
        <Dialog
          open={this.state.open}
          maxWidth="sm"
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
          style={{ overflowX: "hidden" }}
        >
          <DialogTitle id="form-dialog-title">
            <Typography
              component="h1"
              variant="display1"
              align="center"
              style={{ color: "#C12424", fontWeight: "bold" }}
            >
              Rate player
            </Typography>
          </DialogTitle>
          <DialogContent>
            <DialogContentText></DialogContentText>

            <RatingForm />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

Ratings.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Ratings);
