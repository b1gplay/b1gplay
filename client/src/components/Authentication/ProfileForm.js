import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Radio from "@material-ui/core/Radio";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

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
              id="outlined-uncontrolled"
              label="Firstname"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-uncontrolled"
              label="Lastname"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={6} sm={6}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend" align="left">
                Gender
              </FormLabel>
              <RadioGroup
                aria-label="Gender"
                name="gender1"
                className={classes.group}
                //value={this.state.value}
                //onChange={this.handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="date"
              label="Birthday"
              type="date"
              fullWidth
              variant="outlined"
              //defaultValue="2017-05-24"
              className={classes.textField}
              margin="dense"
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-uncontrolled"
              label="Country of residence"
              className={classes.textField}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField
              id="outlined-uncontrolled"
              label="Present club/ Affiliation"
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
