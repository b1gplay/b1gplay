import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GroupIcon from "@material-ui/icons/Group";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    textTransform: "capitalize",
    fontWeight: "bold",
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="primary"
        style={{ background: "#D23E56" }}
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" className={classes.grow}>
            b1gplay
          </Typography>
          <div>
            <Link to="/profile" className={classes.link}>
              <Button color="inherit" className={classes.menuButton}>
                Profile
              </Button>
            </Link>
            <Link to="/" className={classes.link}>
              <Button color="inherit" className={classes.menuButton}>
                Home
              </Button>
            </Link>
            <Link to="/find-players" className={classes.link}>
              <Button color="inherit" className={classes.menuButton}>
                Find Players
              </Button>
            </Link>
            <Link to="/talent-suggestions" className={classes.link}>
              <IconButton color="inherit">
                <GroupIcon />
              </IconButton>
            </Link>
            <Link to="/messages" className={classes.link}>
              <IconButton color="inherit">
                <MessageIcon />
              </IconButton>
            </Link>
            <Link to="/notifications" className={classes.link}>
              <IconButton color="inherit">
                <NotificationsIcon />
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
