import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

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

  showPlayerFormHidden() {
    this.setState({
      playerFormHidden: false
    });
  }

  hidePlayerFormHidden() {
    this.setState({
      playerFormHidden: true
    });
  }

  hideCommonFormHidden() {
    this.setState({
      commonFormHidden: false
    });
  }

  showCommonFormHidden() {
    this.setState({
      commonFormHidden: true
    });
  }

  hideMediaFormHidden() {
    this.setState({
      mediaFormHidden: false
    });
  }

  showMediaFormHidden() {
    this.setState({
      mediaFormHidden: true
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
              id="ratedBy"
              select
              name="ratedBy"
              //value={this.state.advanceType}
              label="Account type"
              fullWidth
              margin="normal"
              variant="outlined"
              //helperText="Please select filter"
              InputLabelProps={{
                shrink: true
              }}
            >
              <MenuList>
                <MenuItem onClick={this.hidePlayerFormHidden.bind(this)}>
                  Coach
                </MenuItem>

                <MenuItem onClick={this.showPlayerFormHidden.bind(this)}>
                  Player
                </MenuItem>

                <MenuItem onClick={this.hidePlayerFormHidden.bind(this)}>
                  Media
                </MenuItem>

                <MenuItem onClick={this.hidePlayerFormHidden.bind(this)}>
                  Fan
                </MenuItem>

                <MenuItem onClick={this.hidePlayerFormHidden.bind(this)}>
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
                  />
                </Grid>
              </Grid>
            </div>
          )}
        </Grid>
      </div>
    );
  }
}

SportsForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SportsForm);
