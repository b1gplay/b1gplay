import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
  }
});

class Comment extends Component {
  state = { comment: "" };

  componentDidMount() {}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onComment = e => {
    if (e.key === "Enter") {
      e.preventDefault(); // this should prevent default action

      console.log(this.state.comment);
      e.target.value = ""; // Clear form input
    }
  };

  render() {
    const { classes } = this.props;
    //const {  } = this.state;

    return (
      <Fragment>
        <Grid item xs={12} style={{ margin: 20 }}>
          <Grid container spacing={24}>
            <Grid item xs={1}>
              <Avatar
                alt="Remy Sharp"
                src={this.props.avatar}
                className={classes.avatar}
                style={{ marginLeft: "10px", marginRight: "10px" }}
              />
            </Grid>
            <Grid item xs={11}>
              <form
                className={classes.container}
                noValidate
                autoComplete="off"
                style={{ marginTop: "-20px", marginRight: "10px" }}
              >
                <TextField
                  id="comment-box"
                  label="Leave a comment..."
                  name="comment"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                  fullWidth
                  style={{ background: "#F5F5F5" }}
                  onChange={this.onChange}
                  onKeyDown={this.onComment}
                />
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  avatar: state.profile.profile_photo
});

export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Comment));
