import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";

const styles = theme => ({
  root: {
    width: "100%"
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10
  }
});

function OnlineChats(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/1.jpg`} />
        </ListItemAvatar>

        <ListItemText inset primary="Nathan Baleeta" />
        <Badge className={classes.margin} color="secondary" variant="dot" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/7.jpg`} />
        </ListItemAvatar>
        <ListItemText inset primary="Diego Angemi" />
        <Badge className={classes.margin} color="primary" variant="dot" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/2.jpg`} />
        </ListItemAvatar>
        <ListItemText inset primary="Tony Otim" />
        <Badge className={classes.margin} color="primary" variant="dot" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/3.jpg`} />
        </ListItemAvatar>
        <ListItemText inset primary="Paul Wallace" />
        <Badge className={classes.margin} color="primary" variant="dot" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/4.jpg`} />
        </ListItemAvatar>
        <ListItemText inset primary="Isaac Watson" />
        <Badge className={classes.margin} color="primary" variant="dot" />
      </ListItem>
    </List>
  );
}

OnlineChats.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OnlineChats);
