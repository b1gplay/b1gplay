import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";
//import MoreVertIcon from "@material-ui/icons/MoreVert";
//import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";

import FeedActionBar from "./FeedActionBar";

import { connect } from "react-redux";
import { getPosts, deletePost } from "../../actions/posts";

import moment from "moment";

const styles = theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  link: {
    textDecoration: "none"
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#D23E56"
    //color: "darkblue"
  },
  subheader: {
    fontSize: "16px"
  }
});

class PhotoVideoFeed extends Component {
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        {this.props.posts.reverse().map(post => (
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CardHeader
                style={{ borderBottom: "1px solid #d4d4d4" }}
                classes={{
                  title: classes.title,
                  subheader: classes.subheader
                }}
                avatar={
                  <Avatar
                    alt="Remy Sharp"
                    src={post.avatar}
                    className={classes.bigAvatar}
                    style={{ marginLeft: "4px", marginRight: "4px" }}
                  />
                }
                action={
                  <IconButton
                    onClick={this.props.deletePost.bind(this, post.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
                title={post.profile_name}
                subheader={moment(`${post.created}`).fromNow()}
              />
              <CardMedia
                style={{ borderBottom: "1px solid #d4d4d4" }}
                className={classes.media}
                image={post.photo}
                title="Paella dish"
              />
              <CardContent>
                <Typography variant="subtitle1" gutterBottom align="left">
                  {post.message}
                </Typography>
              </CardContent>

              <FeedActionBar />
            </Card>
            <br />
          </Grid>
        ))}
      </Fragment>
    );
  }
}

PhotoVideoFeed.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  fullname: state.profile.firstname + " " + state.profile.lastname,
  avatar: state.profile.profile_photo
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost }
)(withStyles(styles)(PhotoVideoFeed));
