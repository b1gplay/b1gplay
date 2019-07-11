import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

//import Avatar from "@material-ui/core/Avatar";

//import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Comment from "./Comment";

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

class FeedActionBar extends Component {
  state = { fist: false, isHidden: false };

  componentDidMount() {}

  handleLike = () => {
    this.setState({ fist: !this.state.fist });
  };

  handleComment = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };
  render() {
    const fistBump = (
      <div>
        <ThumbUpIcon />
      </div>
    );

    const unfistBump = (
      <div>
        <ThumbDownIcon />
      </div>
    );

    //const { classes } = this.props;
    const { fist, isHidden } = this.state;

    return (
      <Fragment>
        <Divider />
        <Grid container spacing={24} style={{ padding: 20 }}>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              size="small"
              color="secondary"
              fullWidth
              style={{
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "18px",
                padding: 4
              }}
              onClick={this.handleLike}
            >
              {!fist ? fistBump : unfistBump}
            </Button>
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              size="small"
              color="default"
              fullWidth
              style={{
                border: "2px solid darkblue",
                textTransform: "capitalize",
                fontWeight: "bold",
                fontSize: "18px",
                color: "darkblue",
                backgroundColor: "white",
                padding: 8
              }}
              onClick={this.handleComment}
            >
              {/* <ChatBubbleOutlineIcon /> */}
              <img
                src="static/images/comment.png"
                style={{
                  width: "20px",
                  height: "20px"
                }}
                alt="text"
              />
            </Button>
          </Grid>
        </Grid>
        <Divider />
        {!isHidden ? null : <Comment />}
        <Divider />
      </Fragment>
    );
  }
}

FeedActionBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FeedActionBar);
