import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  }
});

function ProfileForm(props) {
  const { classes } = props;

  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="outlined-uncontrolled"
              label="Email"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="outlined-uncontrolled"
              label="Password"
              type="password"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="outlined-uncontrolled"
              label="Confirm Password"
              type="password"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProfileForm);
