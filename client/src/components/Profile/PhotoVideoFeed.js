import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import Comment from "./Comment";

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

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "18px"
  },
  subheader: {
    fontSize: "16px"
  }
});

class PhotoVideoFeed extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12} style={{ marginTop: "5px" }}>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/7.jpg"
                className={classes.bigAvatar}
                style={{ marginLeft: "4px", marginRight: "4px" }}
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Otim Tony"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/bb.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="subtitle1" gutterBottom align="left">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <Grid item xs={12} style={{ marginBottom: "5px" }}>
            <Grid container spacing={24}>
              <Grid item xs={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/fist.jpg"
                  //className={classes.avatar}
                  style={{ marginLeft: "10px", marginRight: "10px" }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography
                  paragraph
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                >
                  Fists
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  paragraph
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                  align="right"
                >
                  4 Comments
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Comment />
          <br />
        </Card>
        <br />
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title,
              subheader: classes.subheader
            }}
            avatar={
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/3.jpg"
                className={classes.bigAvatar}
                style={{ marginLeft: "4px", marginRight: "4px" }}
              />
            }
            action={
              <IconButton>
                <MoreVertIcon />
              </IconButton>
            }
            title="Otim Tony"
            subheader="September 14, 2016"
          />
          <CardMedia
            className={classes.media}
            image="/static/images/bb.jpg"
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="subtitle1" gutterBottom align="left">
              This impressive paella is a perfect party dish and a fun meal to
              cook together with your guests. Add 1 cup of frozen peas along
              with the mussels, if you like.
            </Typography>
          </CardContent>
          <Grid item xs={12} style={{ marginBottom: "5px" }}>
            <Grid container spacing={24}>
              <Grid item xs={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/fist.jpg"
                  className={classes.avatar}
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px"
                  }}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography
                  paragraph
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                >
                  Fists
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  paragraph
                  style={{ marginLeft: "10px", marginTop: "10px" }}
                  align="right"
                >
                  4 Comments
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Comment />
          <br />
        </Card>
      </Grid>
    );
  }
}

PhotoVideoFeed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PhotoVideoFeed);
