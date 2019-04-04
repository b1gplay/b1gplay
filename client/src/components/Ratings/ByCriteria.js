import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { render } from "react-dom";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import NativeSelect from "@material-ui/core/NativeSelect";
import Input from "@material-ui/core/Input";
import FormHelperText from "@material-ui/core/FormHelperText";

const options = {
  credits: {
    enabled: false
  },
  chart: {
    type: "column"
  },
  title: {
    text: "Ratings by criteria"
  },
  xAxis: {
    categories: ["Criteria"]
  },
  yAxis: {
    label: "Raters"
  },
  series: [
    {
      name: "Rebounding",
      data: [5.23]
    },
    {
      name: "Defence",
      data: [6.23]
    },
    {
      name: "Scoring",
      data: [7.45]
    },
    {
      name: "Leadership",
      data: [7.84]
    },
    {
      name: "Discipline",
      data: [4.85]
    },
    {
      name: "Basketball IQ",
      data: [8.23]
    },
    {
      name: "Energy",
      data: [6.45]
    },
    {
      name: "Determination",
      data: [2.84]
    },
    {
      name: "Cluth",
      data: [1.85]
    },
    {
      name: "Pro Potential",
      data: [9.23]
    }
  ]
};

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 160,
    height: 160,
    border: "3px solid black"
  },
  media: {
    height: 140
  },
  margin: {
    margin: theme.spacing.unit * 3
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  },
  avatar: {
    margin: 10
  }
});

function ByCriteria(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={9}>
          Select Criteria
        </Grid>
        <Grid item xs={3}>
          <FormControl className={classes.formControl}>
            <NativeSelect
              defaultValue={30}
              input={<Input name="name" id="uncontrolled-native" />}
            >
              <option value="" />
              <option value={10}>All</option>
              <option value={10}>Coaches</option>
              <option value={20}>Agents</option>
              <option value={30}>Media</option>
              <option value={10}>Fans</option>
              <option value={20}>Own</option>
            </NativeSelect>
          </FormControl>
        </Grid>
      </Grid>
      <Card className={classes.card}>
        <CardActionArea>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </CardActionArea>
      </Card>
    </div>
  );
}

ByCriteria.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ByCriteria);
