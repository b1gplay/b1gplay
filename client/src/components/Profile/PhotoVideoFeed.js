import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import DeleteIcon from "@material-ui/icons/Delete";

import { Divider } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Comment from "./Comment";

//import MoreVertIcon from "@material-ui/icons/MoreVert";
//import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { getPosts, deletePost } from "../../actions/posts";
import { getComments } from "../../actions/comments";

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
    color: "#C12424"
    //color: "darkblue"
  },
  subheader: {
    fontSize: "16px"
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
    paddingBottom: 5,
    paddingRight: 3
  }
});

class PhotoVideoFeed extends Component {
  state = { fist: false, isHidden: false };

  componentDidMount() {
    this.props.getPosts();
    this.props.getComments();
  }

  handleLike = () => {
    this.setState({ fist: !this.state.fist });
  };

  handleComment = () => {
    this.setState({ isHidden: !this.state.isHidden });
  };

  render() {
    const { classes } = this.props;
    const { fist, isHidden } = this.state;
    const fistBump = (
      <div>
        {/*  <ThumbUpIcon /> */}
        <img
          src="/static/images/fistbump.png"
          alt="Fistbump icon"
          style={{
            width: "23px",
            height: "23px"
          }}
        />
      </div>
    );

    const unfistBump = (
      <div>
        {/*     <ThumbDownIcon /> */}
        <img
          src="/static/images/fistdown.png"
          alt="Fistbump icon"
          style={{
            width: "23px",
            height: "23px"
          }}
        />
      </div>
    );

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
                <Typography variant="title" gutterBottom align="left">
                  {post.message}
                </Typography>
              </CardContent>
              <Divider />
              {/* Comment List */}

              <Fragment>
                {this.props.comments
                  .filter(function(comment) {
                    // filter first for comments
                    return comment.post === post.id; // returns a new array
                  })
                  .map(function(comment) {
                    // map the new array to list items
                    return (
                      <List className={classes.root}>
                        <ListItem button className={classes.message}>
                          <ListItemAvatar>
                            <Avatar
                              className={classes.avatar}
                              alt="Trial"
                              src={comment.avatar}
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
                            primary={comment.author_name}
                            secondary={
                              <React.Fragment>{comment.message}</React.Fragment>
                            }
                          />
                        </ListItem>
                      </List>
                    ); // don't forget unique key for each item
                  })}
              </Fragment>

              {/* Comment List */}
              {/* Feed Action bar*/}
              <Fragment>
                <Divider />
                <Grid container spacing={24} style={{ padding: 10 }}>
                  <Grid item xs={6} sm={6}>
                    <Button
                      variant="flat"
                      size="small"
                      color="default"
                      fullWidth
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        backgroundColor: "white",
                        padding: 3
                      }}
                      onClick={this.handleLike}
                    >
                      {!fist ? fistBump : unfistBump}
                    </Button>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <Button
                      variant="flat"
                      size="small"
                      color="default"
                      fullWidth
                      style={{
                        fontWeight: "bold",
                        fontSize: "18px",
                        backgroundColor: "white",
                        padding: 3
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
                {!isHidden ? null : <Comment id={post.id} />}
                <Divider />
              </Fragment>
              {/* Feed Action bar*/}
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
  deletePost: PropTypes.func.isRequired,
  getComments: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts.posts,
  comments: state.comments.comments,
  fullname: state.profile.firstname + " " + state.profile.lastname,
  avatar: state.profile.profile_photo
});

export default connect(
  mapStateToProps,
  { getPosts, deletePost, getComments }
)(withStyles(styles)(PhotoVideoFeed));
