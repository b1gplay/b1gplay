import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";

import { connect } from "react-redux";

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
  avatar: {
    margin: 8,
    width: 50,
    height: 50
  },
  // Overiding CSS with classnames for ListItemText Implementation
  primary: {
    fontSize: "18px",
    fontWeight: "bold",
    //color: "#C12424",
    color: "darkblue",
    paddingTop: 3,
    paddingLeft: 3,
    paddingRight: 3
  },
  secondary: {
    fontSize: "16px",
    color: "#000000",
    paddingBottom: 3,
    paddingRight: 3
  }
});

class CommentList extends Component {
  state = {};

  componentDidMount() {}

  render() {
    const { classes } = this.props;
    //const {  } = this.state;

    return (
      <Fragment>
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
              style={{
                background: "#F0F0F0",
                borderRadius: 25
              }}
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
          </ListItem>
        </List>
      </Fragment>
    );
  }
}

CommentList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  avatar: state.profile.profile_photo,
  profileID: state.profile.id
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(CommentList));
