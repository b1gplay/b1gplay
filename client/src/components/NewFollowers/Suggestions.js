import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import MenuItem from "@material-ui/core/MenuItem";

import Button from "@material-ui/core/Button";

import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

import TextField from "@material-ui/core/TextField";

import Typography from "@material-ui/core/Typography";

import { connect } from "react-redux";
import { getSuggestions } from "../../actions/suggestions";

const styles = theme => ({
  //Style the scrollbar
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em"
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)"
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.3)",
      outline: "1px solid slategrey"
    }
  },
  root: {
    width: "100%",
    height: "100%",
    maxWidth: 462,
    backgroundColor: theme.palette.background.paper,
    position: "fixed",
    overflow: "auto",
    maxHeight: "100%",
    borderRight: "1px solid #d4d4d4"
  },
  listSection: {
    backgroundColor: "inherit"
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0
  },
  avatar: {
    margin: 8,
    width: 50,
    height: 50
  },
  message: {
    borderTop: "1px solid #d4d4d4"

    /* "&:hover": {
    background: "#D23E56",
    color: "white"
  } */
  },

  // Overiding CSS with classnames for ListItemText Implementation
  primary: {
    fontSize: "19px",
    fontWeight: "bold"
  },
  secondary: {
    fontSize: "16px"
  }
});

const filterBy = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coach",
    label: "Coach"
  },
  {
    value: "Player",
    label: "Player"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Agent",
    label: "Agent"
  }
];

const sortedBy = [
  {
    value: "Newest To Oldest",
    label: "Newest To Oldest"
  },
  {
    value: "Oldest To Newest",
    label: "Oldest To Newest"
  }
];

class Suggestions1 extends Component {
  state = {};

  componentDidMount() {
    this.props.getSuggestions();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Paper
          elevation="0"
          style={{
            borderRight: "1px solid #d4d4d4",
            position: "fixed",
            width: "100%",
            maxWidth: 462
          }}
        >
          <br />
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Typography
                variant="headline"
                align="center"
                color="inherit"
                //style={{ paddingLeft: 30 }}
              >
                Filter:
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} style={{ padding: 30 }}>
              <TextField
                id="category"
                select
                name="category"
                style={{ margin: 8, fontSize: "18px" }}
                label="Category:"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true
                }}
              >
                {filterBy.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <br />
              <br />
              <TextField
                id="sortedBy"
                select
                name="sortedBy"
                style={{ margin: 8, fontSize: "18px" }}
                //value={this.state.paymentMode}
                //onChange={this.onChange}
                label="Sorted by:"
                fullWidth
                margin="normal"
                variant="outlined"
                //helperText="Please select sorter"
                InputLabelProps={{
                  shrink: true
                }}
              >
                {sortedBy.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>

          <Typography
            variant="headline"
            gutterBottom
            align="center"
            style={{
              color: "black"
            }}
          >
            Suggestions
          </Typography>

          <List className={classes.root}>
            {this.props.suggestions.reverse().map(suggestion => (
              <ListItem button className={classes.message}>
                <ListItemAvatar>
                  <Avatar
                    className={classes.avatar}
                    alt="Trial"
                    src={`/static/images/avatar/7.jpg`}
                  />
                </ListItemAvatar>
                <ListItemText
                  classes={{
                    primary: classes.primary,
                    secondary: classes.secondary
                  }}
                  primary={suggestion.firstname + " " + suggestion.lastname}
                  /* secondary={
                    <React.Fragment>{" @nathan.baleeta"}</React.Fragment>
                  } */
                />
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Follow
                </Button>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Fragment>
    );
  }
}

Suggestions1.propTypes = {
  classes: PropTypes.object.isRequired,
  suggestions: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  suggestions: state.suggestions.suggestions
});

export default connect(
  mapStateToProps,
  { getSuggestions }
)(withStyles(styles)(Suggestions1));
