import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const countries = [
  {
    value: "Uganda",
    label: "Uganda"
  },
  {
    value: "Kenya",
    label: "Kenya"
  },
  {
    value: "Tanzania",
    label: "Tanzania"
  }
];

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class CountryFilter extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={8}>
            {/*  <Typography variant="h6" gutterBottom>
              Select Country
            </Typography> */}
          </Grid>
          <Grid item xs={4}>
            <br />

            <TextField
              id="country"
              select
              name="country"
              //value={this.state.advanceType}
              //onChange={event => this.handleActivation(event)}
              label="Select country:"
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select filter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {countries.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CountryFilter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CountryFilter);
