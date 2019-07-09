import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Select from "react-select";
import countryList from "react-select-country-list";

import { connect } from "react-redux";
import { updateField } from "../../actions/wizard";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },
  selectField: {
    margin: theme.spacing.unit * 3,
    width: "100%",
    textAlign: "left",
    fontFamily: "Arial",
    color: "black",
    marginLeft: 0,
    lineHeight: "40px"
  }
});

class ProfileForm extends Component {
  constructor(props) {
    super(props);

    this.options = countryList().getData();

    this.state = {
      options: this.options
    };
  }

  countrySelector = country => {
    this.props.updateField("country", country);
  };

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  render() {
    const { classes } = this.props;
    //const { country } = this.state;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <TextField
                id="firstname"
                margin="normal"
                variant="outlined"
                fullWidth
                className={classes.textField}
                label="Firstname"
                name="firstname"
                value={this.props.wizard.firstname}
                onChange={this.onChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                id="lastname"
                label="Lastname"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="lastname"
                value={this.props.wizard.lastname}
                onChange={this.onChange}
              />
            </Grid>

            <Grid item xs={6} sm={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend" align="left">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-label="Gender"
                  className={classes.group}
                  name="gender"
                  value={this.props.wizard.gender}
                  onChange={this.onChange}
                >
                  <FormControlLabel
                    value="Male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="Female"
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
                className={classes.textField}
                margin="dense"
                InputLabelProps={{
                  shrink: true
                }}
                name="birthday"
                value={this.props.wizard.birthday}
                onChange={this.onChange}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <Select
                className={classes.selectField}
                options={this.state.options}
                onChange={this.countrySelector}
                value={this.props.wizard.country}
              />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

ProfileForm.propTypes = {
  classes: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard
});

export default connect(
  mapStateToProps,
  { updateField }
)(withStyles(styles)(ProfileForm));
