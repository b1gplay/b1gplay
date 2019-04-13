import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import CardMedia from "@material-ui/core/CardMedia";

import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

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
    margin: 10,
    width: 120,
    height: 120,
    border: "3px solid black"
  },
  media: {
    height: 359
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});
function PlayerOfWeek(props) {
  const { classes } = props;
  return (
    <div>

      <Typography component="h3" variant="subtitle2" style={{ marginLeft: 20, marginTop: 5 }} gutterBottom align="center">
              Picture of the week
          </Typography>

      <Card className={classes.card}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/2.jpg"
              className={classes.avatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Otim Tony"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  className={classes.inline}
                  color="textPrimary"
                />
                {"Tigerhead Power"}
              </React.Fragment>
            }
          />
        </ListItem>

        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/bb.jpg"
            title="Point guard"
          />
        </CardActionArea>
        <CardActions>
          <Grid container spacing={0}>
            <Grid item xs={6} sm={6}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/fist.jpg"
                    className={classes.mediumAvatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        className={classes.inline}
                        color="textPrimary"
                      />
                      {" 3 bumps"}
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Typography
                variant="body2"
                gutterBottom
                color="primary"
                align="right"
                style={{ textTransform: "capitalize", padding: "14px" }}
              >
                18 Comments
              </Typography>
            </Grid>
          </Grid>
        </CardActions>
        <CardContent>
          <Grid container spacing={0}>
            <Grid item xs={2} sm={2}>
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/3.jpg"
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={10} sm={10}>
              <TextField
                id="outlined-bare"
                className={classes.textField}
                placeholder="Leave a comment..."
                margin="normal"
                fullWidth
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

PlayerOfWeek.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlayerOfWeek);
