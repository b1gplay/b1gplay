import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import Avatar from "@material-ui/core/Avatar";

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

function Comment(props) {
  const { classes } = props;

  return (
    <Grid item xs={12} style={{ margin: 20 }}>
      <Grid container spacing={24}>
        <Grid item xs={1}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/3.jpg"
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
              id="outlined-dense"
              label="Leave a comment..."
              className={classNames(classes.textField, classes.dense)}
              margin="dense"
              variant="outlined"
              fullWidth
              style={{ background: "#F5F5F5" }}
            />
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}

Comment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comment);
