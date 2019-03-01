import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "white"
  },
  inline: {
    display: "inline"
  },
  avatar: {
    margin: 10
  }
});

function Clipboard(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/1.jpg`} />
        </ListItemAvatar>

        <ListItemText inset secondary="You followed Nathan Baleeta" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/7.jpg`} />
        </ListItemAvatar>
        <ListItemText inset secondary="Diego Angemi posted a video" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/2.jpg`} />
        </ListItemAvatar>
        <ListItemText inset secondary="Basemera rated Tony Otim" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/3.jpg`} />
        </ListItemAvatar>
        <ListItemText inset secondary="Paul Wallace followed You" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar alt="Trial" src={`/static/images/avatar/4.jpg`} />
        </ListItemAvatar>
        <ListItemText inset secondary="You followed Isaac Watson" />
      </ListItem>
    </List>
  );
}

Clipboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Clipboard);
