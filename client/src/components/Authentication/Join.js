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
import MenuItem from "@material-ui/core/MenuItem";

import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuList from '@material-ui/core/MenuList';
import Divider from '@material-ui/core/Divider';


const styles = theme => ({
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },

  gridContainer: {
    marginTop: -20,
    marginLeft: -24,
    marginRight: -70,
    //marginRight: "auto",
    //marginLeft: "auto",
    height: "auto",
    backgroundSize: "100vw 100vh",
    minHeight: "100%",
    minWidth: "100%",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${"/static/images/s.jpg"})`,
    zIndex: 1000,
    position: "fixed"
  }
});

const accountType = [
  {
    value: "Player",
    label: "Player"
  },
  {
    value: "Coach",
    label: "Coach"
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
    value: "Agents",
    label: "Agents"
  }
];

class Join extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerFormHidden: true,
      mediaFormHidden: true,
      commonFormHidden: true
    }
  }

  showPlayerFormHidden () {
    this.setState({
      playerFormHidden: false
    })
  }

  hidePlayerFormHidden () {
    this.setState({
      playerFormHidden: true
    })
  }

  hideCommonFormHidden () {
    this.setState({
      commonFormHidden: false
    })
  }

  showCommonFormHidden () {
    this.setState({
      commonFormHidden: true
    })
  }

  hideMediaFormHidden () {
    this.setState({
      mediaFormHidden: false
    })
  }

  showMediaFormHidden () {
    this.setState({
      mediaFormHidden: true
    })
  }


  render() {
    const { classes } = this.props; 

    return (
      <div> 

        <Grid container spacing={24} className={classes.gridContainer}>
          <Grid item xs={6} sm={6} style={{ marginLeft: 40 }}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={12} style={{ marginTop: 30 }}>
                <Typography variant="h4" style={{ color: "#ffffff" }}>
                  Where sports and society meet
                </Typography>
                <Typography
                  variant="body2"
                  gutterBottom
                  style={{ fontSize: "17px", color: "#ffffff" }}>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={5} sm={5}>
            <Paper className={classes.paper} style={{ marginRight: 20 }}>
              <Grid container spacing={24}>
                <Grid item xs={6} sm={6} >

                  <TextField
                    id="outlined-uncontrolled"
                    label="First name"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Last name"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                
                  <TextField
                    id="outlined-uncontrolled"
                    label="Email or Mobile number"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Password"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Confirm Password"
                    className={classes.textField}
                    margin="dense"
                    variant="outlined"
                    fullWidth
                  />

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

                  <FormControl component="fieldset" className={classes.formControl} style={{ marginTop: 10, marginLeft: -95 }}>
                    <FormLabel component="legend" align="left" >
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
                        value="female"
                        control={<Radio />}
                        label="Female"
                        margin="dense"
                      />
                      <FormControlLabel
                        value="male"
                        control={<Radio />}
                        label="Male"
                        margin="dense"
                      />
                    </RadioGroup>
                  </FormControl>

                  <TextField
                    id="ratedBy"
                    select
                    name="ratedBy"
                    variant="outlined"
                    margin="dense"
                    label="Account:"
                    fullWidth
                    InputLabelProps={{
                      shrink: true
                    }}>
                    <MenuList >
                      
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
                <Grid item xs={6} sm={6} >
                {!this.state.playerFormHidden && <div className='modal'>
                  
                  <TextField
                    id="outlined-uncontrolled"
                    label="Position"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Height"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Wingspan"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Weight"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Vertical leap"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Time to run 40m"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  <TextField
                    id="outlined-uncontrolled"
                    label="Time to run 100m"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                </div>}

                    <TextField
                    id="outlined-uncontrolled"
                    label="Country of residence"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />
                  
                  <TextField
                    id="outlined-uncontrolled"
                    label="Present club/Affiliation"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                {!this.state.mediaFormHidden && <div className='modal'>
                  <TextField
                    id="outlined-uncontrolled"
                    label="Media house"
                    className={classes.textField}
                    variant="outlined"
                    fullWidth
                    margin="dense"
                  />

                  </div>}

                  
                </Grid>
              </Grid>

              <Button
                variant="contained"
                size="large"
                color="secondary"
                fullWidth
                margin="dense"
                className={classes.button}
                style={{ marginTop: "5px" }} >
                Sign Up
              </Button>

            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}




Join.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Join);
