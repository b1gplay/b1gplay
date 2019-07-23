import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { positions } from "../../utils/PositionList";

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
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  }
});

const accounts = [
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
    value: "Fan",
    label: "Fan"
  },
  {
    value: "Agent",
    label: "Agent"
  }
];

class SportsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { accountForm: "" };
  }

  onChange = e => {
    this.props.updateField(e.target.name, e.target.value);
  };

  render() {
    const { classes } = this.props;

    const common = (
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          />
        </Grid>
      </Grid>
    );

    const media = (
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
            /*  InputLabelProps={{
              shrink: true
            }} */
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          />
        </Grid>
      </Grid>
    );

    const player = (
      <Grid container spacing={8}>
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6}>
          {/*     <TextField
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
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          /> */}

          <TextField
            id="position"
            select
            name="position"
            value={this.props.wizard.position}
            onChange={this.onChange}
            label="Position:"
            fullWidth
            margin="normal"
            variant="outlined"
            style={{ textAlign: "left" }}
            helperText="Please select position"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          >
            {positions.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
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
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
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
            name="affiliation"
            value={this.props.wizard.affiliation}
            onChange={this.onChange}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          />
        </Grid>
      </Grid>
    );

    return (
      <div>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="accountType"
            select
            name="accountType"
            value={this.props.wizard.accountType}
            onChange={this.onChange}
            label="Account type"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.selectField}
            helperText="Please select title"
            InputLabelProps={{
              shrink: true
            }}
            InputProps={{
              classes: {
                notchedOutline: classes.notchedOutline
              }
            }}
          >
            {accounts.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        {/* Using switch to select the appropriate case onChange account type*/}
        {(() => {
          switch (this.props.wizard.accountType) {
            case "Player":
              return player;
            case "Media":
              return media;
            case "Coach":
              return common;
            case "Fan":
              return common;
            case "Agent":
              return common;
            default:
              return "";
          }
        })()}
        {/* Using switch to select the appropriate case onChange account type*/}
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
