import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  paperContainer: {
    width: "100%",
    height: "100%",
    marginTop: -40,
    backgroundImage: `url(${"/static/images/s.jpg"})`
  }
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.paperContainer}>
      <Grid container spacing={24} style={{ marginTop: 30 }}>
        <Grid item xs={6} sm={1} />
        <Grid item xs={6} sm={6}>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Typography variant="h4" style={{ color: "#ffffff" }}>
                Where sports and society meet
              </Typography>
              <Typography
                variant="body2"
                gutterBottom
                style={{ fontSize: "17px", color: "#ffffff" }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6} sm={1} />
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper} style={{ marginBottom: "150px" }}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-uncontrolled"
                  label="First name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Last name"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-uncontrolled"
                label="Email or Mobile number"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-uncontrolled"
                label="Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="outlined-uncontrolled"
                label="Confirm Password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                id="date"
                label="Birthday"
                type="date"
                fullWidth
                variant="outlined"
                defaultValue="2017-05-24"
                className={classes.textField}
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="Gender" name="gender1">
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

            <Button
              variant="contained"
              size="large"
              color="secondary"
              fullWidth
              className={classes.button}
              style={{ marginTop: "5px" }}
            >
              Sign Up
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FullWidthGrid);
