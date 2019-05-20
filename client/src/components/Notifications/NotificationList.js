import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

const styles = theme => ({
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
    background: "white"
  },
  messageScroll: {
    overflowY: "scroll"
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
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

function Messaging(props) {
  const { classes } = props;
  return (
    <div>
      <Paper className={classes.root}>
        <br />
        <Typography variant="subheading" gutterBottom align="center">
          Notifications
        </Typography>

        <div className={classes.messageScroll}>
          <List>
            <ListItem button className={classes.message}>
              <ListItemAvatar>
                <Avatar
                  className={classes.avatar}
                  alt="Trial"
                  src={`/static/images/avatar/1.jpg`}
                />
              </ListItemAvatar>
              <ListItemText
                classes={{
                  primary: classes.primary,
                  secondary: classes.secondary
                }}
                primary="Nathan Baleeta"
                secondary={
                  <React.Fragment>
                    {"  I'll be in your neighborhood doing errands this…"}
                  </React.Fragment>
                }
              />

              <Badge
                className={classes.margin}
                color="secondary"
                variant="dot"
              />
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
                primary="Phillip Bosco"
                secondary={
                  <React.Fragment>
                    {"  Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Badge className={classes.margin} color="primary" variant="dot" />
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
                primary="Phillip Bosco"
                secondary={
                  <React.Fragment>
                    {"  Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Badge className={classes.margin} color="primary" variant="dot" />
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
                primary="Phillip Bosco"
                secondary={
                  <React.Fragment>
                    {"  Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Badge className={classes.margin} color="primary" variant="dot" />
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
                primary="Phillip Bosco"
                secondary={
                  <React.Fragment>
                    {"  Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Badge className={classes.margin} color="primary" variant="dot" />
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
                primary="Phillip Bosco"
                secondary={
                  <React.Fragment>
                    {"  Wish I could come, but I'm out of town this…"}
                  </React.Fragment>
                }
              />
              <Badge className={classes.margin} color="primary" variant="dot" />
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  );
}

Messaging.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Messaging);
