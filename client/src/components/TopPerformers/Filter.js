import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const ratingBy = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coach",
    label: "Coach"
  },
  {
    value: "Player",
    label: "Player"
  },
  {
    value: "Media",
    label: "Media"
  },
  {
    value: "Fans",
    label: "Fans"
  },
  {
    value: "Agent",
    label: "Agent"
  }
];

const sortedBy = [
  {
    value: "Highest To Lowest",
    label: "Highest To Lowest"
  },
  {
    value: "Lowest To Highest",
    label: "Lowest To Highest"
  },
  {
    value: "Newest To Oldest",
    label: "Newest To Oldest"
  },
  {
    value: "Oldest To Newest",
    label: "Oldest To Newest"
  }
];

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

const positions = [
  {
    value: "Point guard",
    label: "Point guard"
  },
  {
    value: "Shooting guard",
    label: "Shooting guard"
  },
  {
    value: "Small guard",
    label: "Small guard"
  },
  {
    value: "Power forward",
    label: "Power forward"
  },
  {
    value: "Center",
    label: "Center"
  }
];

function Filter(props) {
  const { classes } = props;

  return (
    <div>
      <form>
        <br />
        <br />
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Typography variant="headline" align="left" color="inherit">
              Filter:
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12}>
            <TextField
              id="ratedBy"
              select
              name="ratedBy"
              //value={this.state.advanceType}
              //onChange={event => this.handleActivation(event)}
              label="Rated by:"
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select filter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {ratingBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="country"
              select
              name="country"
              //value={this.state.advanceType}
              //onChange={event => this.handleActivation(event)}
              label="Country:"
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

            <TextField
              id="sortedBy"
              select
              name="sortedBy"
              //value={this.state.paymentMode}
              //onChange={this.onChange}
              label="Sorted by:"
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select sorter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {sortedBy.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              id="position"
              select
              name="position"
              //value={this.state.paymentMode}
              //onChange={this.onChange}
              label="Positions:"
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select sorter"
              InputLabelProps={{
                shrink: true
              }}
            >
              {positions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
      </form>
      <br />
      <br />
      <br />
    </div>
  );
}

Filter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Filter);
