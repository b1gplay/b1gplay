import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class CountryFilter extends React.Component {
  state = {
    country: '',
    name: 'Uganda',
    labelWidth: 0,
  };


  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={9}>
          <Typography variant="h6" gutterBottom >
            Select Country 
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="country-native-simple">
            Country
            </InputLabel>
            <Select
              native
              value={this.state.country}
              onChange={this.handleChange('country')}
              inputProps={{
                name: 'country',
                id: 'country-native-simple',
              }}
            >
              <option value="" />
              <option value={10}>Uganda</option>
              <option value={20}>Kenya</option>
              <option value={30}>Tanzania</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      </div>
    );
  }
}

CountryFilter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CountryFilter);