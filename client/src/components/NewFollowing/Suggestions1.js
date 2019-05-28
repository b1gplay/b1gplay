import React from "react";
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
    fontSize: "18px",
    fontWeight: "bold"
  },
  secondary: {
    fontSize: "16px"
  }
});

function LoanList(props) {
  const { classes } = props;

  return (
    <React.Fragment>
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

        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} style={{ padding: 30 }}>
            <TextField
              id="filterBy"
              select
              name="filterBy"
              style={{ margin: 8, fontSize: "18px" }}
              label="Rated by:"
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
          </Grid>
        </Grid>

        <List className={classes.root}>
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Abraham Thomas"
              secondary={<React.Fragment>{"@abraham.thomas"}</React.Fragment>}
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
              primary="Otim Tony"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
              primary="Nathan Baleeta"
              secondary={<React.Fragment>{" @nathan.baleeta"}</React.Fragment>}
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
        </List>
      </Paper>
    </React.Fragment>
  );
}

LoanList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LoanList);
