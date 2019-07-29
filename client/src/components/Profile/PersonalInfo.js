import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
//import MoreVertIcon from "@material-ui/icons/MoreVert";

import PersonAddIcon from "@material-ui/icons/PersonAdd";
//import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import TextField from "@material-ui/core/TextField";

import { countries } from "../../utils/CountryList";
import { positions } from "../../utils/PositionList";

import { connect } from "react-redux";
import { getProfile, editProfile, editField } from "../../actions/profile";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  avatar: {
    margin: 10
  },

  // Overiding CSS with classnames for CardHeader Implementation
  title: {
    fontSize: "24px",
    textAlign: "center",
    color: "#D23E56",
    fontWeight: "bold"
  },
  // Overiding css properties on material ui textbox
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "black !important"
  }
});

class PersonalInfo extends Component {
  state = {
    open: false,
    photo: []
  };

  componentDidMount() {
    this.props.getProfile();
  }

  handleImageChange(e) {
    e.preventDefault();
    let file = e.target.files[0];
    this.setState({
      photo: file
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  onChange = e => {
    this.props.editField(e.target.name, e.target.value);
  };
  onSubmit = event => {
    event.preventDefault();

    // get our form data out of state
    const profile = {
      id: this.props.profile.id,
      firstname: this.props.profile.firstname,
      lastname: this.props.profile.lastname,
      gender: this.props.profile.gender,
      residence_country: this.props.profile.residence_country,
      bio: this.props.profile.bio,
      birth_date: this.props.profile.birth_date,
      affiliation: this.props.profile.affiliation,
      position: this.props.profile.position,
      height: this.props.profile.height,
      wingspan: this.props.profile.wingspan,
      vertical_leap: this.props.profile.vertical_leap,
      time_to_run_40m: this.props.profile.time_to_run_40m,
      time_to_run_100m: this.props.profile.time_to_run_100m,
      profile_photo: this.state.photo
    };

    //console.log(profile);

    this.props.editProfile(profile);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardHeader
            classes={{
              title: classes.title
            }}
            action={
              <IconButton onClick={this.handleOpen}>
                <PersonAddIcon />
              </IconButton>
            }
            title="Personal Info"
          />

          <CardContent>
            <Grid container spacing={24}>
              <Grid item xs={5} sm={5}>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Date of birth:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Position:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Height:
                </Typography>

                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Wingspan:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Vertical leap:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Time to run 40m:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Time to run 100m:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.birth_date}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.position}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.height}
                </Typography>

                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.wingspan}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.vertical_leap}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.time_to_run_40m}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.time_to_run_100m}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  variant="title"
                  gutterBottom
                  align="center"
                  style={{ color: "#D23E56", fontWeight: "bold" }}
                >
                  Affiliation
                </Typography>
              </Grid>
              <Grid item xs={5} sm={5}>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Club:
                </Typography>
                <Typography
                  variant="subheading"
                  gutterBottom
                  align="left"
                  style={{
                    fontWeight: "bold"
                  }}
                >
                  Country:
                </Typography>
              </Grid>
              <Grid item xs={7} sm={7}>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.affiliation}
                </Typography>
                <Typography variant="subheading" gutterBottom align="left">
                  {this.props.profile.residence_country}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>

        <Dialog
          id="myDialog"
          maxWidth="sm"
          open={this.state.open}
          aria-labelledby="form-dialog-title"
          onClose={this.handleClose}
        >
          <DialogTitle
            id="simple-dialog-title"
            color="default"
            style={{ backgroundColor: "#D23E56" }}
          >
            <Typography
              component="h1"
              variant="display1"
              align="center"
              style={{ color: "white" }}
            >
              Edit Profile
            </Typography>
          </DialogTitle>
          <DialogContent>
            <form onSubmit={this.onSubmit}>
              <br />
              <Typography variant="headline" align="left" color="inherit">
                Autobiography
              </Typography>
              <br />
              <Grid container spacing={8}>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="firstname"
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                    label="Firstname"
                    name="firstname"
                    value={this.props.profile.firstname}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="lastname"
                    label="Lastname"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="lastname"
                    value={this.props.profile.lastname}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <FormControl
                    component="fieldset"
                    className={classes.formControl}
                  >
                    <FormLabel component="legend" align="left">
                      Gender
                    </FormLabel>
                    <RadioGroup
                      aria-label="Gender"
                      className={classes.group}
                      name="gender"
                      value={this.props.profile.gender}
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

                <Grid item xs={6} sm={6}>
                  <TextField
                    id="residenceCountry"
                    select
                    name="residence_country"
                    value={this.props.profile.residence_country}
                    onChange={this.onChange}
                    label="Residence Country:"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    //helperText="Please select filter"
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  >
                    {countries.map(option => (
                      <MenuItem key={option.Code} value={option.Name}>
                        {option.Name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    id="bio"
                    label="Bio"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="bio"
                    value={this.props.profile.bio}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
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
                    name="birth_date"
                    value={this.props.profile.birth_date}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
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
                    value={this.props.profile.affiliation}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                    id="position"
                    select
                    name="position"
                    value={this.props.profile.position}
                    onChange={this.onChange}
                    label="Position:"
                    fullWidth
                    margin="normal"
                    variant="outlined"
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
                    label="Height"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="height"
                    value={this.props.profile.height}
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
                    label="Wingspan"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="wingspan"
                    value={this.props.profile.wingspan}
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
                    value={this.props.profile.vertical_leap}
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
                    name="time_to_run_40m"
                    value={this.props.profile.time_to_run_40m}
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
                    name="time_to_run_100m"
                    value={this.props.profile.time_to_run_100m}
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
                    id="profile-photo"
                    label="Profile Photo"
                    type="file"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="profile_photo"
                    onChange={e => this.handleImageChange(e)}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid>
                {/* <Grid item xs={12} sm={12}>
                  <TextField
                    id="cover-photo"
                    label="Cover Photo"
                    type="file"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    fullWidth
                    name="profile_photo"
                    value={this.props.profile.cover_photo}
                    onChange={this.onChange}
                    InputLabelProps={{
                      shrink: true
                    }}
                    InputProps={{
                      classes: {
                        notchedOutline: classes.notchedOutline
                      }
                    }}
                  />
                </Grid> */}
                <Grid item xs={12} sm={12}>
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    color="primary"
                    style={{ background: "#D23E56", fontWeight: "bold" }}
                  >
                    Edit Profile
                  </Button>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

PersonalInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  getProfile: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  editField: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getProfile, editProfile, editField }
)(withStyles(styles)(PersonalInfo));
