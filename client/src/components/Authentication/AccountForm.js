import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";

import TextField from "@material-ui/core/TextField";

import { connect } from "react-redux";
import { updateField } from "../../actions/wizard";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  }
});

class AccountForm extends Component {
  state = {};

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  render() {
    const { classes } = this.props;
    //const { message } = this.state;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12}>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="email"
                label="Email"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="email"
                value={this.props.wizard.email}
                onChange={this.onChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password"
                label="Password"
                type="password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="password"
                value={this.props.wizard.password}
                onChange={this.onChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="password2"
                label="Confirm Password"
                type="password"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth
                name="password2"
                value={this.props.wizard.password2}
                onChange={this.onChange}
                InputProps={{
                  classes: {
                    notchedOutline: classes.notchedOutline
                  }
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

AccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard
});
export default connect(
  mapStateToProps,
  { updateField }
)(withStyles(styles)(AccountForm));
