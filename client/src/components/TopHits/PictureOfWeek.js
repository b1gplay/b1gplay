import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";

import Comment from "./Comment";

const styles = theme => ({
  avatar: {
    margin: 10,
    border: "1px solid #d4d4d4"
  },
  mediumAvatar: {
    margin: 10,
    width: 20,
    height: 20
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  media: {
    height: 359
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "18px"
  },
  subheader: {
    fontSize: "16px"
  }
});
function PictureOfWeek(props) {
  const { classes } = props;
  return (
    <div>
      <Typography variant="h5" component="h3" color="default" align="center">
        Picture of the week
      </Typography>
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
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
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
    </div>
  );
}

PictureOfWeek.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PictureOfWeek);
