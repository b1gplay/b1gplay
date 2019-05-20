import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import ReactDOM from 'react-dom';


const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 175,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

const following = [
  {
    value: "All",
    label: "All"
  },
  {
    value: "Coaches",
    label: "Coaches"
  },
  {
    value: "Players",
    label: "Players"
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
    value: "Agents",
    label: "Agents"
  }
];

class SimpleSelect extends React.Component {
  state = {
    age: '',
    name: 'hai',
    labelWidth: 0,
  };

  componentDidMount() {
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
    });
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

  return (
    <div>
      <Paper className={classes.root} elevation={0}>
        <form>
          <Grid container spacing={24}>
            <Grid item xs={12} sm={12}>
              <Typography variant="subtitle2" align="center" color="inherit">
                Filter:
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <form className={classes.root} autoComplete="off" align="center">
          <FormControl variant="outlined" className={classes.formControl} >
            <InputLabel
              ref={ref => {
                this.InputLabelRef = ref;
              }}
              htmlFor="outlined-age-simple"
            >
              Followers
            </InputLabel>
            <Select
              value={this.state.age}
              onChange={this.handleChange}
              margin="dense"
              input={
                <OutlinedInput
                  labelWidth={this.state.labelWidth}
                  name="age"
                  id="outlined-age-simple"
                />
              }
            >
              <MenuItem value={10}>All</MenuItem>
              <MenuItem value={20}>Coach</MenuItem>
              <MenuItem value={30}>Player</MenuItem>
              <MenuItem value={40}>Media</MenuItem>
              <MenuItem value={50}>Fans</MenuItem>
              <MenuItem value={60}>Agent</MenuItem>

            </Select>
          </FormControl>
          
        </form>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSelect);
