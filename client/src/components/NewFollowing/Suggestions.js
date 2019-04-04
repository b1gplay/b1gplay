import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2
  },

  bigAvatar: {
    width: 40,
    height: 40
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Followers(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/7.jpg"
                  className={classes.bigAvatar}
                />
              }
              action={
                <Button
                  size="small"
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                >
                  Follow
                </Button>
              }
              title="Otim Tony"
              subheader="@otim.tony"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

Followers.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Followers);
