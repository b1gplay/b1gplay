import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import { connect } from "react-redux";
import { updateField } from "../../actions/wizard";

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "100%",
    maxWidth: "auto"
  }
});

class SportsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerFormHidden: true,
      mediaFormHidden: true,
      commonFormHidden: true
    };
  }

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  showPlayerFormHidden() {
    this.setState({
      playerFormHidden: false,
      mediaFormHidden: true,
      commonFormHidden: true
    });
  }

  hidePlayerFormHidden() {
    this.setState({
      playerFormHidden: true
    });
  }

  hideCommonFormHidden() {
    this.setState({
      commonFormHidden: true
    });
  }

  showCommonFormHidden() {
    this.setState({
      commonFormHidden: false,
      mediaFormHidden: true,
      playerFormHidden: true
    });
  }

  hideMediaFormHidden() {
    this.setState({
      mediaFormHidden: false
    });
  }

  showMediaFormHidden() {
    this.setState({
      mediaFormHidden: false,
      playerFormHidden: true,
      commonFormHidden: true
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container spacing={8}>
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="accountType"
              select
              label="Account type"
              fullWidth
              margin="normal"
              variant="outlined"
              helperText="Please select account type"
              InputLabelProps={{
                shrink: true
              }}
              name="accountType"
              value={this.props.wizard.accountType}
              onChange={this.onChange}
            >
              <MenuList>
                <MenuItem onClick={this.showCommonFormHidden.bind(this)}>
                  Coach
                </MenuItem>

                <MenuItem onClick={this.showPlayerFormHidden.bind(this)}>
                  Player
                </MenuItem>

                <MenuItem onClick={this.showMediaFormHidden.bind(this)}>
                  Media
                </MenuItem>

                <MenuItem onClick={this.showCommonFormHidden.bind(this)}>
                  Fan
                </MenuItem>

                <MenuItem onClick={this.showCommonFormHidden.bind(this)}>
                  Agent
                </MenuItem>
              </MenuList>
            </TextField>
          </Grid>
          {!this.state.playerFormHidden && (
            <div className="modal">
              <Grid container spacing={8}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Position"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="position"
                    value={this.props.wizard.position}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Height"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="height"
                    value={this.props.wizard.height}
                    onChange={this.onChange}
                  />
                </Grid>

                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Wingspan"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="wingspan"
                    value={this.props.wizard.wingspan}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Vertical leap"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="verticalLeap"
                    value={this.props.wizard.verticalLeap}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Time to run 40m"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="time40m"
                    value={this.props.wizard.time40m}
                    onChange={this.onChange}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    required
                    id="outlined-uncontrolled"
                    label="Time to run 100m"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="time100m"
                    value={this.props.wizard.time100m}
                    onChange={this.onChange}
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
                    name="presentClub"
                    value={this.props.wizard.presentClub}
                    onChange={this.onChange}
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
        {!this.state.mediaFormHidden && (
          <div className="modal">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Media House"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="mediaHouse"
                  value={this.props.wizard.mediaHouse}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
          </div>
        )}
        {!this.state.commonFormHidden && (
          <div className="modal">
            <Grid container spacing={0}>
              <Grid item xs={12} sm={12}>
                <TextField
                  id="outlined-uncontrolled"
                  label="Present club/ Affiliation"
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  name="affiliation"
                  value={this.props.wizard.affiliation}
                  onChange={this.onChange}
                />
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    );
  }
}

SportsForm.propTypes = {
  classes: PropTypes.object.isRequired,
  updateField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  wizard: state.wizard
});

export default connect(
  mapStateToProps,
  { updateField }
)(withStyles(styles)(SportsForm));
